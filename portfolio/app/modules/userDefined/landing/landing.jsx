'use client';
import style from "./landing.module.css";
import useWindowWidth from '../../helperFunction/getwidth/getWidth';
import Wallpaper from "../wallpaper/wallpaper";
import { useEffect,useState } from "react";




export default function Landing() {
    const [date, setDate] = useState(new Date());

     useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000); // update every second
        return () => clearInterval(interval); // cleanup
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
        </div>
    );
}
