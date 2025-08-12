"use client";
import style from "./aboutme.module.css";
import { Sign } from "../../../customIcon/index"
import MagnetLines from  "@/components/Animations/MagnetLines/MagnetLines";
import useWindowWidth from "../../helperFunction/getwidth/getWidth";

export default function AboutMe() {
    const Width = useWindowWidth();
    
    return (

        // <div className="flex">


            <div className={style.aboutMeBox}>
                <div>


                <h1 className={style.title}>Nakul Dev</h1>
                <h1 className={style.title2}>Developer</h1>
                <p className={style.para}>I craft sleek, user-focused digital experiences with a passion for minimalism and creative design.</p>
                <p className={style.para}>With a strong foundation in modern web technologies, I specialize in building fast, responsive, and elegant web apps.</p>
                <p className={style.para}>Beyond code, I'm inspired by art, music, and everything that sparks creativity in digital spaces.</p>
                <div className={style.sign}>
                    <Sign />
                </div>
                <div className={style.copyright}>
                    <p>© 2022-2025 <br />
                        All Rights Reserved</p>
                </div>
                </div>

            {/* <div style={{maxHeight:"50px"}}>


            {Width>760&&(<MagnetLines
                rows={9}
                columns={9}
                containerSize="60vmin"
                lineColor="#00bfa6"
                lineWidth="0.25vmin"
                lineHeight="6vmin"
                baseAngle={0}
                // style={{ margin: "2rem auto" }}
            />)}
            </div> */}
            
            </div>

        // </div>
    );
}