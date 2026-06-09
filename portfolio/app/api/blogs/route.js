import { getDevToArticles } from "@/app/lib/devto";

export async function GET() {
  const data = await getDevToArticles();

  return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
  });
}
