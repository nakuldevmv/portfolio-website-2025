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
                <div className="flex gap-2">
                    <GlassSurface
                        width={width > 450 ? 330 : (width - 100)}
                        height={50}
                        borderRadius={24}
                        displace={3}

                    >
                        <div className={style.navbar}>
                            <a href="#home" className={style.button}>Home</a>
                            <a href="#projects" className={style.button}>Projects</a>
                            <a href="#about" className={style.button}>About</a>
                            <a href="#contact" className={style.button}>Contact</a>
                        </div>
                    </GlassSurface>
                    <GlassSurface
                        width={50}
                        height={50}
                        borderRadius={24}
                        displace={3}
                    >
                        <div className={style.darkLight}><ToggleTheme /></div>

                    </GlassSurface>
                </div>
            </div>
        </div>
    )
}
