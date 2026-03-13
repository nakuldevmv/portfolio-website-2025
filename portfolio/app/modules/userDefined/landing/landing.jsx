'use client';
import style from "./landing.module.css";
import useWindowWidth from '../../helperFunction/getwidth/getWidth';
import Wallpaper from "../wallpaper/wallpaper";
import { useEffect, useState } from "react";
import GradualBlur from "./GradualBlur";


export default function Landing() {
    const [date, setDate] = useState(new Date());
    const [blurOpacity, setBlurOpacity] = useState(1);

     useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000); // update every second
        return () => clearInterval(interval); // cleanup
    }, []);

    useEffect(() => {
        // Ease-in-out cubic — soft start and soft end
        const easeInOut = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const handleScroll = () => {
            const blogsEl = document.getElementById('blogs');
            if (!blogsEl) return;

            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

            // Fade starts when the bottom of #blogs reaches viewport center
            const blogsBottom = blogsEl.getBoundingClientRect().bottom + scrollY;
            const fadeStart = blogsBottom - window.innerHeight * 0.5;

            // Fade ends slightly before absolute page bottom for a clean finish
            const fadeEnd = maxScroll - 40;

            if (scrollY <= fadeStart) {
                setBlurOpacity(1);
            } else if (scrollY >= fadeEnd) {
                setBlurOpacity(0);
            } else {
                const raw = (scrollY - fadeStart) / (fadeEnd - fadeStart);
                setBlurOpacity(1 - easeInOut(raw));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let width = useWindowWidth();
        if (width === null) return null;
    return (
        <div className={style.landing}>
           <Wallpaper/>
                <div className={style.text}>
                    <h1>
                        In a world of digital noise, <br />
                        clarity is a story worth telling.
                    </h1>
                {/* {date.toLocaleTimeString()} */}
                </div>
            <GradualBlur
                target="page"
                position="bottom"
                height="7rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential
                opacity={1}
                style={{ opacity: blurOpacity }}
            />
        </div>
    );
}
