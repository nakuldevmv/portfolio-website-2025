import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  getArticleLastModified,
  getArticleDescription,
  getArticleTags,
  getDevToArticleBySlug,
} from "@/app/lib/devto";
import style from "../../modules/userDefined/blogs/fullBlog.module.css";

const SITE_URL = "https://www.nakuldev.me";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getDevToArticleBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.cover_image || DEFAULT_IMAGE;
  const description = getArticleDescription(post);

  return {
    title: post.title,
    description,
    keywords: getArticleTags(post),
    authors: [{ name: "Nakul Dev M V", url: SITE_URL }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description,
      publishedTime: post.published_at,
      modifiedTime: getArticleLastModified(post).toISOString(),
      authors: ["Nakul Dev M V"],
      tags: getArticleTags(post),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getDevToArticleBySlug(slug);

  if (!post) {
    notFound();
  }

  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.cover_image || DEFAULT_IMAGE;
  const tags = getArticleTags(post);
  const description = getArticleDescription(post);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    image,
    datePublished: post.published_at,
    dateModified: getArticleLastModified(post).toISOString(),
    author: {
      "@type": "Person",
      name: "Nakul Dev M V",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Nakul Dev M V",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: tags.join(", "),
  };

  return (
    <main className={style.blogSection}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className={style.blog}>
        {post.cover_image && (
          <Image
            src={post.cover_image}
            className={style.blogimg}
            alt={post.title}
            width={1200}
            height={630}
            sizes="(max-width: 760px) 95vw, 1000px"
            priority
            fetchPriority="high"
          />
        )}
        <div className={style.blogBox}>
          <h1 className={style.blogTitle}>{post.title}</h1>
          <div className={style.date}>
            <div>{post.readable_publish_date}</div>✦︎
            <div>{post.reading_time_minutes} min read</div>
          </div>
          <div className={style.markdownContent}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                h1({ node, children, ...props }) {
                  return (
                    <h2 className={style.markdownH1} {...props}>
                      {children}
                    </h2>
                  );
                },
                img({ node, alt, ...props }) {
                  return (
                    <img
                      {...props}
                      alt={alt || ""}
                      className={style.markdownImage}
                      loading="lazy"
                      decoding="async"
                    />
                  );
                },
                a({ node, children, href, ...props }) {
                  const isExternal = href?.startsWith("http");

                  return (
                    <a
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      {...props}
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {post.body_markdown}
            </ReactMarkdown>
          </div>
          <div className={style.tagsContainer}>
            {tags.map((tag) => (
              <span key={tag} className={style.tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
