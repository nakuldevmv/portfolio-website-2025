import Link from "next/link";
import Image from "next/image";
import { getArticleTags, getDevToArticles } from "@/app/lib/devto";
import style from "./fullBlog.module.css";

export default async function FullBlog() {
  const posts = await getDevToArticles();

  if (!posts.length) {
    return <div className={style.empty}>No blogs found🥲</div>;
  }

  return (
    <div className={style.blogSection}>
      <div className={style.Btitle}>
        <h2>Blogs</h2>
      </div>

      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} className={style.blog} key={post.id}>
          {post.cover_image && (
            <Image
              src={post.cover_image}
              className={style.blogimg}
              alt={post.title}
              width={1000}
              height={420}
              sizes="(max-width: 760px) 95vw, 1000px"
            />
          )}
          <div className={style.blogBox}>
            <div className={style.blogTitle}>{post.title}</div>
            <div className={style.date}>
              <div>{post.readable_publish_date}</div>✦︎
              <div>{post.reading_time_minutes} min read</div>
            </div>
            <div className={style.excerpt}>{post.description}</div>
            <div className={style.tagsContainer}>
              {getArticleTags(post).map((tag) => (
                <span key={tag} className={style.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
