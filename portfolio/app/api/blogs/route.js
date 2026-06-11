import { getDevToArticles } from "@/app/lib/devto";

export async function GET() {
  const data = await getDevToArticles();

  return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
  });
}
