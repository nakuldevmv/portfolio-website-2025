// import Beams from "@/components/Backgrounds/Beams/Beams";
import Threads from "@/components/Backgrounds/Threads/Threads";
import useWindowWidth from '../../helperFunction/getwidth/getWidth';


export default function Wallpaper() {
    let width = useWindowWidth();
    if (width === null) return null;
    return (
        <>
            <Threads
                amplitude={1.5}
                distance={0.2}
                enableMouseInteraction={width > 768 ? true : false}
            />

            {/* <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={0.5}
                speed={0.5}
                
            /> */}
            
        </>
    );
}
