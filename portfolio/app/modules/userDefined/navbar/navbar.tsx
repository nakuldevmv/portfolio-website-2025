"use client"
import GlassSurface from "@/components/Components/GlassSurface/GlassSurface"
import ToggleTheme from "../../theme/toggleTheme"
import style from "./navbar.module.css"
import useWindowWidth from "../../helperFunction/getwidth/getWidth"

export default function NavBar() {
    const width = useWindowWidth();
    if (width === null) return null;

    return (
        <div className={style.navContainer}>
            <div style={{ pointerEvents: "auto" }}>
                <GlassSurface
                    width={width > 450 ? 450 : (width - 50)}
                    height={50}
                    borderRadius={100}
                    displace={3.5}
                    distortionScale={-150}
                    redOffset={5}
                    greenOffset={15}
                    blueOffset={25}
                    brightness={50}
                    mixBlendMode="lighten"
                >
                    <div className={style.navbar}>
                        <a href="#home" className={`${style.button} hover:bg-amber-50`}>Home</a>
                        <a href="#project" className={style.button}>Projects</a>
                        <a href="#contact" className={style.button}>Contact</a>
                        <div className={style.darkLight}><ToggleTheme /></div>
                    </div>
                </GlassSurface>
            </div>
        </div>
    )
}
