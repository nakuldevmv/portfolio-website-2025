
'use client';
import style from "./landing.module.css";
import Threads from "@/components/Backgrounds/Threads/Threads";
import useWindowWidth from '../../helperFunction/getWidth';



export default function Landing() {
    let width = useWindowWidth();
        if (width === null) return null;
    return (
        <div className={style.landing}>
            <Threads
                amplitude={1.5}
                distance={0.2}
                enableMouseInteraction={width > 768 ? true : false}
            />
                <div className={style.text}>
                    <h1>
                        In a world of digital noise, <br />
                        clarity is a story worth telling.
                    </h1>
                </div>
           
        </div>
    );
}
