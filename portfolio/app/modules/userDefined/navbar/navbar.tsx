"use client"
import GlassSurface from "@/components/Components/GlassSurface/GlassSurface"
import ToggleTheme from "../../theme/toggleTheme"
import style from "./navbar.module.css"
import useWindowWidth from "../../helperFunction/getwidth/getWidth"
import AnimatedContent from "@/components/Animations/AnimatedContent/AnimatedContent";
import { smoothScrollTo } from "../../helperFunction/smoothScroll/butterSnap";

export default function NavBar() {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        smoothScrollTo(id, -50) // offset to account for sticky header or vibe adjustment
    }
    const width = useWindowWidth();
    if (width === null) return null;

    return (

        <div className={style.navContainer}>
            <AnimatedContent
                direction="vertical"
                ease={"elastic.out(1, 0.3)"}
                reverse={true}
                animateOpacity={true}
                distance={20}
                duration={3}
                delay={1}
                initialOpacity={0}
                threshold={0.1}

            >
                <div style={{ pointerEvents: "auto" }}>
                    <div className="flex gap-2">
                        <GlassSurface
                            width={width > 450 ? 330 : (width - 100)}
                            height={50}
                            borderRadius={24}
                            displace={3}

                        >

                            <nav className={style.navbar}>

                                <a href="#home" className={style.button} onClick={(e) => handleClick(e, '#home')}>Home</a>
                                <a href="#about" className={style.button} onClick={(e) => handleClick(e, '#about')}>About</a>
                                <a href="#skill" className={style.button} onClick={(e) => handleClick(e, '#skill')}>Skills</a>
                                <a href="#project" className={style.button} onClick={(e) => handleClick(e, '#project')}>Project</a>

                            </nav>

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
            </AnimatedContent>
        </div>
    )
}
