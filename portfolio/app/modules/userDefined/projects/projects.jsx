
'use client';
import style from "./projects.module.css";
import useWindowWidth from '../../helperFunction/getwidth/getWidth';



export default function Projects() {

    return (
        <>
            <div className={style.projectContainer}>
                <video
                    className="w-full h-full object-cover"
                    src="/sr.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

            </div>


        </>


    );
}