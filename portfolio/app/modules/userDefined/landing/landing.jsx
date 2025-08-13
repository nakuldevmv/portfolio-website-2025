
'use client';
import style from "./landing.module.css";
import useWindowWidth from '../../helperFunction/getwidth/getWidth';
import Wallpaper from "../wallpaper/wallpaper";



export default function Landing() {
    let width = useWindowWidth();
        if (width === null) return null;
    return (
        <div className={style.landing}>
           {/* <Wallpaper/> */}
                <div className={style.text}>
                    <h1>
                        {/* In a world of digital noise, <br />
                        clarity is a story worth telling. */}
                        I suppose, in the end,<br /> the whole of life becomes <br /> an act of letting go. <br /> But what always hurts the most is <br />not taking a moment to say goodbye.
                    </h1>
                </div>
           
        </div>
    );
}
