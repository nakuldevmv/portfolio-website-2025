
'use client';
import CardSwap, { Card } from '@/components/Components/CardSwap/CardSwap';
import style from "./projects.module.css";
import Image from 'next/image';
import useWindowWidth from '../../helperFunction/getWidth';


export default function Projects() {
    let width = useWindowWidth();
    if (width === null) return null;
    return (
        <div className={style.projectContainer}>

            <div className={style.mainHeading}>
                <h1>Featured Work</h1>
                <p>Selected builds that showcase clean architecture, smart logic, and real-world impact.</p>
            </div>



            <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={3500}
                pauseOnHover={true}
                skewAmount={7}
                height={width < 480 ? 600 : 400}
                width={width < 768 ? width < 480 ? 800 : 600 : 500}
            >
                <Card className={style.card}>
                    <div className={style.phead}>

                        <svg xmlns="http://www.w3.org/2000/svg"
                            className='text-black dark:text-white'
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            class="lucide lucide-mail-check-icon lucide-mail-check">
                            <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            <path d="m16 19 2 2 4-4" />
                        </svg>
                        &nbsp;
                        Spamurai
                    </div>
                    <div className={style.pbody}>
                        <div className={style.overlayText}>
                            The mail cleaner
                            <br />project
                        </div>

                        <div className={style.imgwrapper}>
                            <Image
                                src="/Project_images/spamurai.jpg"
                                alt="Cool goose"
                                width={800}
                                height={800}
                                priority
                            />

                        </div>
                    </div>
                </Card>
                <Card className={style.card}>
                    <div className={style.phead}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='text-black dark:text-white'
                            width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" class="lucide lucide-scan-eye-icon lucide-scan-eye">
                            <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                            <path d="M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="1" />
                            <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
                        </svg>
                        &nbsp;
                        Findx
                    </div>
                    <div className={style.pbody}>
                        <div className={style.overlayText}>
                            Search What you need
                            <br />Google Dorking
                        </div>

                        <div className={style.imgwrapper}>
                            <Image
                                src="/Project_images/findx.jpg"
                                alt="Cool goose"
                                width={800}
                                height={800}
                                priority
                            />

                        </div>
                    </div>
                </Card>
                <Card className={style.card}>
                    <div className={style.phead}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='text-black dark:text-white'
                            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-layout-template-icon lucide-layout-template"><rect width="18" height="7" x="3" y="3" rx="1" /><rect width="9" height="7" x="3" y="14" rx="1" /><rect width="5" height="7" x="16" y="14" rx="1" /></svg>
                        &nbsp;
                        Portfolio Website
                    </div>
                    <div className={style.pbody}>
                        <div className={style.overlayText}>
                            My own portofolio website
                            <br />2024
                        </div>

                        <div className={style.imgwrapper}>
                            <Image
                                src="/Project_images/portWeb.jpg"
                                alt="Cool goose"
                                width={800}
                                height={800}
                                priority
                            />

                        </div>
                    </div>
                </Card>
            </CardSwap>
        </div>
    );
}