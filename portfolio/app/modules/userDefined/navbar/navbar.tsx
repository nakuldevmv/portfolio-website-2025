"use client"
import dynamic from "next/dynamic"
import ToggleTheme from "../../theme/toggleTheme"
import style from "./navbar.module.css"
import useWindowWidth from "../../helperFunction/getwidth/getWidth"
import AnimatedContent from "@/components/Animations/AnimatedContent/AnimatedContent";
import { smoothScrollTo } from "../../helperFunction/smoothScroll/butterSnap";
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const GlassSurface = dynamic(() => import("@/components/Components/GlassSurface/GlassSurface"), {
    ssr: false,
});

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isRotate, setIsRotate] = useState(false);
    function RotateBtn() {
        setIsRotate(!isRotate);
    }
    const Width = useWindowWidth();
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        smoothScrollTo(id, -50) // offset to account for sticky header or vibe adjustment
    }
    const navWidth = Width ?? 1024;
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
            {navWidth < 760 ? (
                <div className={style.mobileNav}>
                    <AnimatedContent
                        direction="horizontal"
                        ease={"power3.out"}
                        reverse={false}
                        animateOpacity={true}
                        distance={20}
                        duration={1}
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
                                <motion.div
                                    onClick={RotateBtn}
                                    animate={{ rotate: isRotate ? -360 : 0 }}
                                    transition={{ duration: 0.8 , ease:"easeInOut"}}
                                >

                                    <ToggleTheme />

                                </motion.div>

                            </GlassSurface>
                        </div>
                        <button
                            className={style.menuBtn}
                            onClick={toggleMenu}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                        >
                            <GlassSurface
                                width={50}
                                height={50}
                                borderRadius={24}
                                displace={3}
                            >
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isOpen ? (
                                        <X width={20} height={20} />
                                    ) : (
                                        <Menu width={20} height={20} />
                                    )}


                                </motion.div>


                            </GlassSurface>
                        </button>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ width: 0, height: 0, scale: 0 }}
                                    animate={{ width: 200, height: 320, scale: 1 }}
                                    exit={{ width: 0, height: 0, scale: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className={style.menuBar}>
                                    <GlassSurface
                                        key="glass-nav"
                                        width={200}
                                        height={320}
                                        borderRadius={30}
                                        displace={5}

                                    >
                                        <nav className={style.navbarMob}>
                                            {/* <a href="#home" className={style.buttonMob} onClick={(e) => handleClick(e, '#home')}><button onClick={close}><div className={style.circleAnimate}>✦︎</div> &nbsp;Home</button></a> */}
                                            <a href="#about" className={style.buttonMob} onClick={(e) => { handleClick(e, '#about'); close(); }}><div className={style.circleAnimate}>✦︎</div> &nbsp;About</a>
                                            <a href="#project" className={style.buttonMob} onClick={(e) => { handleClick(e, '#project'); close(); }}><div className={style.circleAnimate}>✦︎</div> &nbsp;Project</a>
                                            <a href="#blogs" className={style.buttonMob} onClick={(e) => { handleClick(e, '#blogs'); close(); }}><div className={style.circleAnimate}>✦︎</div> &nbsp;Blogs</a>
                                            <a href="#contact" className={style.buttonMob} onClick={(e) => { handleClick(e, '#contact'); close(); }}><div className={style.circleAnimate}>✦︎</div> &nbsp;Contact</a>
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
                        ease={"power3.out"}
                        reverse={true}
                        animateOpacity={true}
                        distance={20}
                        duration={1}
                        delay={1}
                        initialOpacity={0}
                        threshold={0.1}

                    >
                        <div style={{ pointerEvents: "auto" }}>
                            <div className="flex gap-2">
                                <GlassSurface
                                    width={navWidth > 450 ? 480 : (navWidth - 100)}
                                    height={50}
                                    borderRadius={24}
                                    displace={3}

                                >

                                    <nav className={style.navbar}>

                                        {/* <a href="#home" className={style.button} onClick={(e) => handleClick(e, '#home')}><div className={style.circleAnimate}>✦︎</div> &nbsp;Home</a> */}
                                        <a href="#about" className={style.button} onClick={(e) => handleClick(e, '#about')}><div className={style.circleAnimate}>✦︎</div> &nbsp;About</a>
                                        <a href="#project" className={style.button} onClick={(e) => handleClick(e, '#project')}><div className={style.circleAnimate}>✦︎</div> &nbsp;Project</a>
                                        <a href="#blogs" className={style.button} onClick={(e) => handleClick(e, '#blogs')}><div className={style.circleAnimate}>✦︎</div> &nbsp;Blogs</a>
                                        <a href="#contact" className={style.button} onClick={(e) => handleClick(e, '#contact')}><div className={style.circleAnimate}>✦︎</div> &nbsp;Contact</a>

                                    </nav>

                                </GlassSurface>
                                <GlassSurface
                                    width={50}
                                    height={50}
                                    borderRadius={24}
                                    displace={3}
                                >
                                    <motion.div
                                        onClick={RotateBtn}
                                        animate={{ rotate: isRotate ? -360 : 0 }}
                                        transition={{ duration: 0.8 , ease:"easeInOut"}}
                                    >

                                        <ToggleTheme />

                                    </motion.div>

                                </GlassSurface>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            )}


        </>
    )
}
