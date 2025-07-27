"use client";
import style from "./aboutme.module.css";
export default function AboutMe() {
    return (

        <div className={style.aboutMeBox}>
            <h1 className={style.title}>Nakul Dev</h1>
            <h1 className={style.title2}>Developer</h1>
            <p className={style.para}>I craft sleek, user-focused digital experiences with a passion for minimalism and creative design.</p>
            <p className={style.para}>With a strong foundation in modern web technologies, I specialize in building fast, responsive, and elegant web apps.</p>
            <p className={style.para}>Beyond code, I'm inspired by art, music, and everything that sparks creativity in digital spaces.</p>
            <div className={style.sign}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black dark:text-white"
                    width="62"
                    height="40.497"
                    fill="none"
                    overflow="visible"
                >
                    <g>
                        <path
                            d="M 0 40.497 C 0 40.497 12.832 31.622 17.279 14.997 C 21.725 -1.628 8.258 -6.253 6.098 10.497 C 3.939 27.247 17.723 30.247 22.361 21.497 C 26.998 12.747 27.887 19.934 31.508 23.497 C 35.129 27.059 37.861 25.747 40.656 20.997 C 43.451 16.247 42.523 23.455 48.279 24.497 C 54.035 25.538 57.68 23.247 59.967 18.997 M 13.213 29.997 L 62 29.997"
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            </div>
            <div className={style.copyright}>
                <p>© 2022-2025 <br />
                    All Rights Reserved</p>
            </div>
        </div>
    );
}