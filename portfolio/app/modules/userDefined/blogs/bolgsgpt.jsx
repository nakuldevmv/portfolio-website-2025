"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './blogsgpt.module.css';

export default function BlogPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define an async function inside the effect
        const fetchBlogPosts = async () => {
            try {
                setLoading(true);
                setError(null);

                const username = "nakuldevmv";

                // Step 1: Fetch the list of articles
                const response = await fetch(`https://dev.to/api/articles?username=${username}&state=all`,
                    {
                        cache: "no-store"
                    }
                );

                // Check if the response was successful
                if (!response.ok) {
                    throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
                }

                const articlesList = await response.json();

                // Step 2: Fetch detailed information for each article
                const detailedPostsPromises = articlesList.map(async (article) => {
                    const articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);

                    // Check if the article response was successful
                    if (!articleResponse.ok) {
                        throw new Error(`Failed to fetch article ${article.id}: ${articleResponse.status} ${articleResponse.statusText}`);
                    }

                    return await articleResponse.json();
                });

                // Wait for all the detailed article requests to complete
                const detailedPosts = await Promise.all(detailedPostsPromises);

                // Update state with the fetched posts
                setPosts(detailedPosts);
            } catch (err) {
                // Handle any errors that occurred during fetching
                console.error("Error fetching blog posts:", err);
                setError(err.message);
            } finally {
                // This code runs whether there was an error or not
                setLoading(false);
            }
        };

        // Call the async function
        fetchBlogPosts();
    }, []); // Empty dependency array means this runs once on mount


    return (
        <main className={styles.container}>
            <h1 className={styles.title}>📝 Nakul's Full Blog Feed</h1>

            {loading ? (
                <div className={styles.loadingContainer}>
                    <div className={styles.loadingSpinner}></div>
                </div>
            ) : posts.length === 0 ? (
                <p className={styles.noPosts}>No blog posts found yet. Nakul's cooking, probably...</p>
            ) : (
                posts.map((post) => (
                    <article
                        key={post.id}
                        className={styles.article}
                    >
                        {post.cover_image && (
                            <img
                                src={post.cover_image}
                                alt="cover"
                                className={styles.coverImage}
                            />
                        )}

                        <h2 className={styles.articleTitle}>{post.title}</h2>

                        <p className={styles.metaInfo}>
                            👤 <strong>{post.user.name}</strong> | 🕒{" "}
                            {post.readable_publish_date} | ⌛{" "}
                            {post.reading_time_minutes} min read
                        </p>

                        {/* Markdown Renderer */}
                        <div className={styles.markdownContent}>
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

                        <div className={styles.tagsContainer}>
                            {post.tags &&
                                post.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className={styles.tag}
                                    >
                                        #{tag}
                                    </span>
                                ))}
                        </div>

                        <p className={styles.reactions}>
                            ❤️ {post.positive_reactions_count} reactions | 💬{" "}
                            {post.comments_count} comments
                        </p>
                    </article>
                ))
            )}
        </main>
    );
}