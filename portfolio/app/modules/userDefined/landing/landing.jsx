
import style from "./landing.module.css";
import Threads from "@/components/Backgrounds/Threads/Threads";



export default function Landing() {
    return (
        <div className={style.landing}>
            <Threads
                amplitude={1}
                distance={0.25}
                enableMouseInteraction={false}
            />
                <div className={style.text}>
                    <h1>
                        In a world of digital noise, <br />
                        clarity is a story worth telling.
                    </h1>
                </div>
           
        </div>
    );
}
