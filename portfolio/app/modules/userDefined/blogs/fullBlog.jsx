"use client";

import { useEffect, useState } from "react";


import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import style from './fullBlog.module.css';


export default function FullBlog() {
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

            {posts.map((post, index) => (

                <div
                    className={style.blog}
                    key={index}
                >
                    <img src={post.cover_image} className={style.blogimg} alt={post.title} />
                    <div className={style.blogBox}>
                        <div className={style.blogTitle}>{post.title}</div>
                        <div className={style.date}>
                            <div>{post.readable_publish_date}</div>✦︎
                            <div>{post.reading_time_minutes} min read</div>
                        </div>
                        <div className={style.markdownContent}>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    code({ node, inline, className, children, ...props }) {
                                        const match = /language-(\w+)/.exec(className || '');
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={vscDarkPlus}
                                                language={match[1]}
                                                PreTag="div"
                                                {...props}
                                            >
                                                {String(children).replace(/\n$/, '')}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        );
                                    }
                                }}
                            >
                                {post.body_markdown}
                            </ReactMarkdown>
                        </div>
                        <div className={style.tagsContainer}>
                            {post.tags &&
                                post.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className={style.tag}
                                    >
                                        #{tag}
                                    </span>
                                ))}
                        </div>

                    </div>

                </div>
            ))}

        </div>
    );
}
