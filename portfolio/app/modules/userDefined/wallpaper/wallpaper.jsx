// 'use client'
// import Beams from "@/components/Backgrounds/Beams/Beams";

import Threads from "@/components/Backgrounds/Threads/Threads";
import useWindowWidth from '../../helperFunction/getwidth/getWidth';


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
            <div className="min-h-screen w-full relative bg-black">
    {/* Prismatic Aurora Burst - Multi-layered Gradient */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
      }}
    />
    {/* Your Content/Components */}
  </div>


        </>
    );
}
