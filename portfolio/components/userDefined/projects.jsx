
import CardSwap, { Card } from '@/components/Components/CardSwap/CardSwap';
import style from "./projects.module.css";
import Image from 'next/image';

export default function Projects() {
    return (
        <div className={style.projectContainer}>

            <div className={style.mainHeading}>
                <h1>Featured Work</h1>
                <p>Selected builds that showcase clean architecture, smart logic, and real-world impact.</p>
            </div>
            <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={3000}
                pauseOnHover={true}
            >
                <Card className={style.card}>
                <div className={style.phead}>
                    🥷 Spamurai
                </div>
                <div className={style.pbody}>
                    <div className={style.overlayText}>
                        The mail cleaner
                        <br />project
                    </div>

                    <div className={style.imgwrapper}>
                        <Image
                            src="/images/test.png"
                            alt="Cool goose"
                            width={800}
                            height={800}
                        />

                    </div>
                </div>
            </Card>
            <Card className={style.card}>
                <div className={style.phead}>
                    🔍 Findx
                </div>
                <div className={style.pbody}>
                    <div className={style.overlayText}>
                        Search What you need
                        <br />Google Dorking
                    </div>

                    <div className={style.imgwrapper}>
                        <Image
                            src="/images/test.png"
                            alt="Cool goose"
                            width={800}
                            height={800}
                        />

                    </div>
                </div>
            </Card>
            <Card className={style.card}>
                <div className={style.phead}>
                    📃 Portfolio Website
                </div>
                <div className={style.pbody}>
                    <div className={style.overlayText}>
                        My own portofolio website
                        <br />2024
                    </div>

                    <div className={style.imgwrapper}>
                        <Image
                            src="/images/test.png"
                            alt="Cool goose"
                            width={800}
                            height={800}
                        />

                    </div>
                </div>
            </Card>
            </CardSwap>
            
        </div>
    );
}