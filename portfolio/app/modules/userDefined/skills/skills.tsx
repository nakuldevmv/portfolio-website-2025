'use client';
import TiltedCard from "@/components/Components/TiltedCard/TiltedCard";
import style from "./skills.module.css"
export default function Skills() {
    return (

        <div className={style.skillBox}>
            <div className={style.mainHeading}>
                <h1>Tech I Use</h1>
                <p> Languages and tools I’ve worked with across personal projects, team builds, and practical development.</p>
            </div>
            <div className={style.skillCards}>
                {/* c++ */}
                <a href="https://isocpp.org/" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/cpp.png"
                        altText="C++"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                C++
                            </p>
                        }
                    />
                </a>
                {/* python */}
                <a href="https://www.python.org/" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/python.png"
                        altText="Python"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                Python
                            </p>
                        }
                    />
                </a>
                {/* javascript */}
                <a href="https://www.javascript.com/" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/javascript.png"
                        altText="JavaScript"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                JavaScript
                            </p>
                        }
                    />
                </a>
                {/* typescript */}
                <a href="https://www.typescriptlang.org/" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/typescript.png"
                        altText="TypeScript"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                TypeScript
                            </p>
                        }
                    />
                </a>
                {/* html */}
                <a href="https://html.com/" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/html5.png"
                        altText="html"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                HTML
                            </p>
                        }
                    />
                </a>
                {/* css */}
                <a href="https://devdocs.io/css/" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/css3.png"
                        altText="css"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                CSS
                            </p>
                        }
                    />
                </a>
                {/* ReactJS  */}
                <a href="https://react.dev/" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/reactjs.png"
                        altText="ReactJS"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                ReactJS
                            </p>
                        }
                    />
                </a>
                {/* nextjs */}
                <a href="https://nextjs.org" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/nextjs.png"
                        altText="NextJS"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                Next.js
                            </p>
                        }
                    />
                </a>
                {/* Node.js */}
                <a href="https://nodejs.org/en" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/nodejs.png"
                        altText="NodeJS "
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                Node.JS
                            </p>
                        }
                    />
                </a>
                {/* expressjs  */}
                <a href="https://expressjs.com/" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/expressjs-dark.png"
                        altText="Express.js"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                Express.js
                            </p>
                        }
                    />
                </a>
                {/* mysql */}
                <a href="https://dev.mysql.com/" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/mysql.png"
                        altText="MySQL  "
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                MySQL
                            </p>
                        }
                    />
                </a>
                {/* mongodb */}
                <a href="https://www.mongodb.com/docs/" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/mongodb.png"
                        altText="mongodb "
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                MongoDB
                            </p>
                        }
                    />
                </a>
                {/* Git  */}
                <a href="https://git-scm.com/doc" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/git.png"
                        altText="git "
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                Git
                            </p>
                        }
                    />
                </a>
                {/* Github */}
                <a href="https://docs.github.com/en" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/github-dark.png"
                        altText="github "
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                Github
                            </p>
                        }
                    />
                </a>
                {/* Figma  */}
                <a href="https://help.figma.com/hc/en-us" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/figma.png"
                        altText="Figma  "
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                Figma
                            </p>
                        }
                    />
                </a>
                {/* Vercel  */}
                <a href="https://vercel.com/docs" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/vercel-dark.png"
                        altText="Vercel"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                Vercel
                            </p>
                        }
                    />
                </a>
                {/* Render */}
                <a href="https://render.com/docs" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/render.png"
                        altText="Render"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                Render
                            </p>
                        }
                    />
                </a>
                {/* Flutter  */}
                <a href="https://docs.flutter.dev/" target="_blank">
                    <TiltedCard

                        imageSrc="/skill_icons/flutter.png"
                        altText="Flutter"
                        containerHeight="150px"
                        containerWidth="150px"
                        imageHeight="150px"
                        imageWidth="150px"
                        rotateAmplitude={12}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className={style.skillText}>
                                Flutter
                            </p>
                        }
                    />
                </a>
            </div>
        </div>
    );
}