const COOLDOWN_HOURS = 4; // only trigger GitHub once every 6 hours
const REPO_OWNER = "nakuldevmv";
const REPO_NAME = "Resume";

// In-memory timestamp of the last trigger.
// Resets on every cold start (server restart / new deployment).
// For persistent cooldown across restarts, replace with a DB or KV store
// (e.g. Vercel KV, Upstash Redis, or a simple JSON file on disk).
let lastTriggeredAt = null;

export async function POST() {
  try {
    const now = Date.now();
    const cooldownMs = COOLDOWN_HOURS * 60 * 60 * 1000;

    // ── Cooldown check ────────────────────────────────────────────────────────
    if (lastTriggeredAt && now - lastTriggeredAt < cooldownMs) {
      const minutesLeft = Math.ceil(
        (cooldownMs - (now - lastTriggeredAt)) / 60000,
      );
      return Response.json(
        { ok: false, reason: "cooldown", minutesLeft },
        { status: 429 },
      );
    }

    // ── Fire GitHub Actions ───────────────────────────────────────────────────
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/dispatches`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.github+json",
        },
        body: JSON.stringify({ event_type: "visitor-trigger" }),
      },
    );

    // GitHub returns 204 No Content on success
    if (response.status !== 204) {
      const error = await response.text();
      console.error("GitHub API error:", error);
      return Response.json(
        { ok: false, reason: "github_error" },
        { status: 500 },
      );
    }

    // ── Update cooldown timestamp ─────────────────────────────────────────────
    lastTriggeredAt = now;
    console.log(
      `[trigger] GitHub Actions fired at ${new Date(now).toISOString()}`,
    );

    return Response.json({
      ok: true,
      triggeredAt: new Date(now).toISOString(),
    });
  } catch (err) {
    console.error("Trigger error:", err);
    return Response.json(
      { ok: false, reason: "server_error" },
      { status: 500 },
    );
  }
}

// Block all non-POST requests
export async function GET() {
  return Response.json(
    { ok: false, reason: "method_not_allowed" },
    { status: 405 },
  );
}
