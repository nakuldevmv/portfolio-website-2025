"use client"
import { useEffect, useState } from "react";
import style from "./blogs.module.css";
import Link from 'next/link'; 
import LinkButton from "../buttons/MoreBlogs/moreBlogs"



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
            const result = await response.json();

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
                                key={index}
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

                    <LinkButton href="/blog" label="More Blogs"/>
                    </div>
                </>
            })()}
        </div>
    );
}

