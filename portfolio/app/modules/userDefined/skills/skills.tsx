'use client';
import {
    CppIcon,
    JavaScriptIcon,
    TypeScriptIcon,
    HtmlIcon,
    CssIcon,
    ReactJsIcon,
    NextJsIcon,
    NodeJsIcon,
    ExpressJsIcon,
    MySqlIcon,
    MongoDbIcon,
    GitIcon,
    GithubIcon,
    FigmaIcon,
    VercelIcon,
    RenderIcon,
    FlutterIcon,
    ArrowLine
} from "@/app/customIcon";// import { MoonIcon } from "@/app/customIcon";
import style from "./skills.module.css"
import Marquee from "react-fast-marquee"

// import Tooltip from "../toolTip/toolTip"
export default function Skills() {

    return (
        <>


            <div className={style.mq1}>
                <Marquee
                    speed={60}
                    direction="left"
                    pauseOnHover={true}
                    autoFill={true}
                    gradient={false}
                    loop={0}
                    delay={0}
                >

                    <div className={style.skilldata}>
                        <div className={style.icon}><CppIcon height="2rem" /></div>
                        <div className={style.text}>C++</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><JavaScriptIcon height="2rem" /></div>
                        <div className={style.text}>JavaScript</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><TypeScriptIcon height="2rem" /></div>
                        <div className={style.text}>TypeScript</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><HtmlIcon height="2rem" /></div>
                        <div className={style.text}>HTML</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><CssIcon height="2rem" /></div>
                        <div className={style.text}>CSS</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><ReactJsIcon height="2rem" /></div>
                        <div className={style.text}>ReactJS</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><NextJsIcon height="2rem" /></div>
                        <div className={style.text}>Next.js</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><NodeJsIcon height="2rem" /></div>
                        <div className={style.text}>Node.JS</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><ExpressJsIcon height="2rem" className="text-black dark:text-white" /></div>
                        <div className={style.text}>Express.js</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><MySqlIcon height="2rem" /></div>
                        <div className={style.text}>MySQL</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><MongoDbIcon height="2rem" /></div>
                        <div className={style.text}>MongoDB</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><GitIcon height="2rem" /></div>
                        <div className={style.text}>Git</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><GithubIcon height="2rem" className="text-black dark:text-white" /></div>
                        <div className={style.text}>Github</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><FigmaIcon height="2rem" /></div>
                        <div className={style.text}>Figma</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><VercelIcon height="2rem" className="text-black dark:text-white" /></div>
                        <div className={style.text}>Vercel</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><RenderIcon height="2rem" className="text-black dark:text-white" /></div>
                        <div className={style.text}>Render</div>
                    </div>

                    <div className={style.skilldata}>
                        <div className={style.icon}><FlutterIcon height="2rem" /></div>
                        <div className={style.text}>Flutter</div>
                    </div>
                </Marquee>
            </div>
            <div className={style.techStack}>

                <h1>My Dev Toolkit</h1> <ArrowLine  width="5rem"  />
            </div>
        </>


    );
}
