"use client";
import { useState } from "react";
import style from "./aboutme.module.css";
import { Sign } from "../../../customIcon/index"
import useWindowWidth from "../../helperFunction/getwidth/getWidth";
import ResumeBtn from "../buttons/resumebtn/resumebtn"
import Popup from "../../userDefined/popup/popUp";

export default function AboutMe() {
      const [isOpen, setIsOpen] = useState(false);

    // const Width = useWindowWidth();

    return (
        <div className={style.aboutMeBox}>
            <div>
                <h1 className={style.title}>Nakul Dev</h1>
                <h1 className={style.title2}>Developer</h1>
                <p className={style.para}>I craft sleek, user-focused digital experiences with a passion for minimalism and creative design.</p>
                <p className={style.para}>With a strong foundation in modern web technologies, I specialize in building fast, responsive, and elegant web apps.</p>
                <p className={style.para}>Beyond code, I'm inspired by art, music, and everything that sparks creativity in digital spaces.</p>
                <div className={style.sign}>
                    {/* <Sign /> */}
                <ResumeBtn onClick={() => setIsOpen(true)} />
                <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} />
                </div>
                
            </div>
        </div>
    );
}