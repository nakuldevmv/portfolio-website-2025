const DEVTO_USERNAME = "nakuldevmv";
const DEVTO_API_BASE = "https://dev.to/api";

export type DevToArticle = {
  id: number;
  slug: string;
  title: string;
  description?: string;
  cover_image?: string | null;
  readable_publish_date?: string;
  published_at?: string;
  edited_at?: string | null;
  reading_time_minutes?: number;
  tags?: string[] | string;
  tag_list?: string[] | string;
  url?: string;
  body_markdown?: string;
};

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`dev.to request failed: ${response.status}`);
  }

  return response.json();
}

export async function getDevToArticles(): Promise<DevToArticle[]> {
  try {
    const articles = await fetchJson<DevToArticle[]>(
      `${DEVTO_API_BASE}/articles?username=${DEVTO_USERNAME}&state=all`
    );

    return articles.sort(
      (a, b) =>
        new Date(b.published_at ?? 0).getTime() -
        new Date(a.published_at ?? 0).getTime()
    );
  } catch (error) {
    console.error("Error fetching dev.to articles:", error);
    return [];
  }
}

export async function getDevToArticleBySlug(
  slug: string
): Promise<DevToArticle | null> {
  const articles = await getDevToArticles();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return null;
  }

  try {
    return fetchJson<DevToArticle>(`${DEVTO_API_BASE}/articles/${article.id}`);
  } catch (error) {
    console.error(`Error fetching dev.to article "${slug}":`, error);
    return null;
  }
}

export function getArticleTags(article: DevToArticle): string[] {
  const tags = article.tags ?? article.tag_list ?? [];

  if (Array.isArray(tags)) {
    return tags.filter(Boolean);
  }

  return tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export function getArticleLastModified(article: DevToArticle): Date {
  return new Date(
    article.edited_at ?? article.published_at ?? "2025-01-01T00:00:00.000Z"
  );
}
