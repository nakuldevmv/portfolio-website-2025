'use client'
import styles from './moreBlogs.module.css'
import { Arrow } from '@/app/customIcon/index'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LinkButton({
    label = "Label",
    href = "/",
}) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    async function handleClick(e) {
        e.preventDefault();
        if (isLoading) return;

        setIsLoading(true);

        try {
            // Pre-fetch the target page so it's ready before we navigate.
            // We ping the URL; the Next.js router will also have cached it.
            await fetch(href, { method: 'GET', cache: 'no-store' });
        } catch {
            // If prefetch fails, navigate anyway
        } finally {
            router.push(href);
            // keep loading state until navigation completes (Next.js will unmount this)
        }
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`${styles.btn} ${isLoading ? styles.loading : ''}`}
            aria-busy={isLoading}
        >
            <div className={styles.circle} />
            <div className={styles.txt}>
                {isLoading ? 'Loading…' : label}
                {!isLoading && <Arrow className={styles.arrow} />}
            </div>
        </a>
    );
}
