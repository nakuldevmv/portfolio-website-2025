// 'use client'
// import Beams from "@/components/Backgrounds/Beams/Beams";

import Threads from "@/components/Backgrounds/Threads/Threads";
import useWindowWidth from '../../helperFunction/getwidth/getWidth';
import BeamsBackground from '@/components/kokonutui/beams-background';


export default function Wallpaper() {
    let width = useWindowWidth();
    if (width === null) return null;
    return (
        <>
            {/* <Threads
                amplitude={1.5}
                distance={0.2}
                enableMouseInteraction={width > 768 ? true : false}
            /> */}
            <BeamsBackground/>


        </>
    );
}
