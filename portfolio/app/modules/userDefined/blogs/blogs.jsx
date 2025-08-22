"use client"
import { useEffect, useState } from "react";
import style from "./blogs.module.css";

export default function Blogs() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    async function fetchBlog() {
        const username = "nakuldevmv";
        const response = await fetch(
            `https://dev.to/api/articles?username=${username}&per_page=2&timestamp=${Date.now()}`,
            {
                cache: "no-store"
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch blogs");
        }
        const result = await response.json();
        console.log(result);
        setPosts(result);
        setLoading(false);
    }



    useEffect(() => {
        fetchBlog(); // fixed name


    }, []);
    if (loading) return <div>Loading..</div>;

    if (!posts.length) return <div>No blogs found</div>;
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
            <div className={style.moreBlogs}></div>


        </div>
    );
}
