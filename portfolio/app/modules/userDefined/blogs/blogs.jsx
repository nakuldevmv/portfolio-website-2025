"use client"
import { useEffect, useState } from "react";
import style from "./blogs.module.css";


export default function Blogs() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    async function fetchBlog() {
        try {
            const username = "nakuldevmv";
            const response = await fetch(
                `https://dev.to/api/articles?username=${username}&per_page=2&state=all`,
                {
                    cache: "no-store"
                }
            );
            const blogs = await response.json();
            const detailedBolgPromise = blogs.map(async (article) => {
                const response = await fetch(`https://dev.to/api/articles/${article.id}`);
                if (!response.ok) {
                    throw new Error(`Could not fetch details for post ID: ${article.id}`);
                }
                return await response.json();

            })
            const result = await Promise.all(detailedBolgPromise);

            if (!response.ok) {
                throw new Error("Failed to fetch blogs");
            }
            console.log("API Response:", result);
            setPosts(result);

        } catch (err) {
            console.error("Error fetching blogs:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }



    useEffect(() => {
        fetchBlog();


    }, []);

    if (loading) return <div className={style.loading}>Loading blogs...</div>;
    if (error) return <div className={style.error}>Error: {error}</div>;
    if (!posts.length) return <div className={style.empty}>No blogs found</div>;
    return (
        <div className={style.blogSection}>
            <div className={style.title}>
                <h1>Blogs</h1>
            </div>
            <div className={style.blogbanner}>
                {posts.map((post, index) => (

                    <div
                        className={style.blog}
                        key={index}
                    >
                        <img src={post.cover_image} alt={post.title} />
                        <div className={style.blogTitle}>{post.title}</div>
                        <div className={style.date}>
                            <div>{post.readable_publish_date}</div>✦︎
                            <div>{post.reading_time_minutes} min read</div>
                        </div>
                        <div className={style.description}>{post.description}</div>
                    </div>
                ))}



            </div>
            {/* <div className={style.moreBlogs}>More Blogs</div> */}


        </div>
    );
}


