// File location: app/api/telegram/route.js

const REPO_OWNER = "nakuldevmv";
const REPO_NAME = "Resume";
const WORKFLOW_FILE = "private-resume.yml";
const ALLOWED_CHAT_ID = process.env.TELEGRAM_CHAT_ID; // only you can trigger this

export async function POST(req) {
  try {
    const body = await req.json();

    const message = body?.message;
    const chatId = String(message?.chat?.id);
    const text = message?.text?.toLowerCase().trim();

    // ── Ignore messages from anyone other than you ───────────────────────────
    if (chatId !== String(ALLOWED_CHAT_ID)) {
      console.warn(`[telegram] Ignored message from unknown chat: ${chatId}`);
      return Response.json({ ok: true });
    }

    // ── Route based on message text ──────────────────────────────────────────
    let action = null;
    if (text === "last resume") action = "send"; // send the stored zip
    if (text === "latest resume") action = "scrape"; // scrape fresh + send

    // Unknown command — send help message
    if (!action) {
      await sendMessage(
        chatId,
        "🤖 *Resume Bot*\n\n" +
          "Send one of these commands:\n\n" +
          "• *last resume* — send the last saved resume\n" +
          "• *latest resume* — scrape a fresh copy and send it",
      );
      return Response.json({ ok: true });
    }

    // ── Trigger GitHub Actions workflow ──────────────────────────────────────
    const ghResponse = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/actions/workflows/${WORKFLOW_FILE}/dispatches`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.github+json",
        },
        body: JSON.stringify({
          ref: "main",
          inputs: { action },
        }),
      },
    );

    if (ghResponse.status === 204) {
      const reply =
        action === "send"
          ? "⏳ Grabbing the last saved resume, sending shortly..."
          : "⏳ Scraping the latest resume from Overleaf, will send shortly...\n\n_This takes about 1–2 minutes._";
      await sendMessage(chatId, reply);
    } else {
      const error = await ghResponse.text();
      console.error("[telegram] GitHub API error:", ghResponse.status, error);
      await sendMessage(
        chatId,
        "❌ Failed to trigger the workflow. Check your GitHub token.",
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[telegram] Webhook error:", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}

// Helper — send a plain text or markdown message back to the bot chat
async function sendMessage(chatId, text) {
  try {
    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      },
    );
  } catch (err) {
    console.error("[telegram] Failed to send message:", err);
  }
}

// Block non-POST requests
export async function GET() {
  return Response.json(
    { ok: false, reason: "method_not_allowed" },
    { status: 405 },
  );
}
