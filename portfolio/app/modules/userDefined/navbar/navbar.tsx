"use client"
import GlassSurface from "@/components/Components/GlassSurface/GlassSurface"
import ToggleTheme from "../../theme/toggleTheme"
import style from "./navbar.module.css"
import useWindowWidth from "../../helperFunction/getwidth/getWidth"
import AnimatedContent from "@/components/Animations/AnimatedContent/AnimatedContent";
import { smoothScrollTo } from "../../helperFunction/smoothScroll/butterSnap";
import { MenuIcon } from "@/app/customIcon"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const width = useWindowWidth();
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        smoothScrollTo(id, -50) // offset to account for sticky header or vibe adjustment
    }
    if (width === null) { return null };
    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    function close() {
        setTimeout(() => {
            setIsOpen(false);
        }, 1800)

    }

    return (
        <>
            {width < 760 ? (
                <div className={style.mobileNav}>
                    <AnimatedContent
                        direction="horizontal"
                        ease={"elastic.out(1, 0.3)"}
                        reverse={false}
                        animateOpacity={true}
                        distance={20}
                        duration={3}
                        delay={1}
                        initialOpacity={0}
                        threshold={0.1}

                    >
                        <div className={style.themeBtn}>
                            <GlassSurface
                                width={50}
                                height={50}
                                borderRadius={24}
                                displace={3}
                            >
                                <ToggleTheme />

                            </GlassSurface>
                        </div>
                        <div className={style.menuBtn} onClick={toggleMenu}>
                            <GlassSurface
                                width={50}
                                height={50}
                                borderRadius={24}
                                displace={3}
                            >
                                <MenuIcon />

                            </GlassSurface>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{  width: 0,height:0,scale:0 }}
                                    animate={{  width: width - 200,height:300,scale:1 }}
                                    exit={{  width: 0,height:0,scale:0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className={style.menuBar}>
                                    <GlassSurface
                                        key="glass-nav"
                                        width={width - 200}
                                        height={300}
                                        borderRadius={30}
                                        displace={5}

                                    >
                                        <nav className={style.navbarMob}>
                                            <a href="#home" className={style.buttonMob} onClick={(e) => handleClick(e, '#home')}><button onClick={close}><div className={style.circleAnimate}>✦︎</div> &nbsp;Home</button></a>
                                            <a href="#about" className={style.buttonMob} onClick={(e) => handleClick(e, '#about')}><button onClick={close}><div className={style.circleAnimate}>✦︎</div> &nbsp;About</button></a>
                                            <a href="#skill" className={style.buttonMob} onClick={(e) => handleClick(e, '#skill')}><button onClick={close}><div className={style.circleAnimate}>✦︎</div> &nbsp;Skills</button></a>
                                            <a href="#project" className={style.buttonMob} onClick={(e) => handleClick(e, '#project')}><button onClick={close}><div className={style.circleAnimate}>✦︎</div> &nbsp;Project</button></a>
                                        </nav>
                                    </GlassSurface>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </AnimatedContent>
                </div>
            ) : (
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
            )}

        </>
    )
}
