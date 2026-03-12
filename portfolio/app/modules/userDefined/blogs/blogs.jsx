"use client"
import { useEffect, useState } from "react";
import style from "./blogs.module.css";
import Link from 'next/link';
import LinkButton from "../buttons/MoreBlogs/moreBlogs"



export default function Blogs() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // Inner helper: tries up to maxAttempts times, throws on final failure
    async function fetchBlogWithRetry(maxAttempts = 3) {
        let lastError;
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            try {
                const response = await fetch("/api/blogs");

                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }

                const result = await response.json();

                if (!Array.isArray(result)) {
                    throw new Error("Unexpected response format");
                }

                const sorted = result.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
                return sorted.slice(0, 2);

            } catch (err) {
                lastError = err;
                if (attempt < maxAttempts - 1) {
                    // Wait before retrying (exponential: 600ms, 1200ms)
                    await new Promise(res => setTimeout(res, 600 * (attempt + 1)));
                }
            }
        }
        throw lastError;
    }

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);

        fetchBlogWithRetry()
            .then(posts => { if (!cancelled) setPosts(posts); })
            .catch(err => { if (!cancelled) { console.error("Error fetching blogs:", err); setError(err.message); } })
            .finally(() => { if (!cancelled) setLoading(false); });

        return () => { cancelled = true; };

    }, []);


    return (
        <div className={style.blogSection}>
            <div className={style.title}>
                <h1>Blogs</h1>
            </div>
            {(() => {
                if (loading) return <>
                    <div className={style.blogbanner}>
                        {[1, 2].map((_, index) => (

                            <div className={style.blogSkeleton} key={index}>
                                <div className={style.imgSkeleton}></div>
                                <div className={style.titleSkeleton}></div>
                                <div className={style.dateSkeleton}></div>
                                <div className={style.descSkeleton}></div>
                            </div>
                        ))}
                    </div>
                </>

                if (error) return <div className={style.error}>⚠️Error: Something went sideways… Nakul’s debugging 🛠️</div>

                if (!posts.length) return <div className={style.empty}>No blogs yet… Nakul’s cooking ideas 🥲💡</div>


                return <>
                    <div className={style.blogbanner}>
                        {posts.map((post, index) => (

                            <Link
                                href={`/blog#${post.slug}`}
                                className={style.blog}
                                key={post.id}
                            >
                                <img src={post.cover_image} alt={post.title} />
                                <div className={style.blogBox}>
                                    <div className={style.blogTitle}>{post.title}</div>
                                    <div className={style.date}>
                                        <div>{post.readable_publish_date}</div>✦︎
                                        <div>{post.reading_time_minutes} min read</div>
                                    </div>
                                    <div className={style.description}>{post.description}</div>
                                </div>

                            </Link>

                        ))}



                    </div>
                    <div className={style.moreBlogs}>

                        <LinkButton href="/blog" label="More Blogs" />
                    </div>
                </>
            })()}
        </div>
    );
}

