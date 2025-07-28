import GlassSurface from "@/components/Components/GlassSurface/GlassSurface"
import ToggleTheme from "../../theme/toggleTheme"

export default function NavBar() {
    return (
        <div className="sticky top-0 z-50 ">
            {/* // Basic usage */}
            <GlassSurface
                width="100%"
                borderRadius={24}
                className="my-custom-class"
            >
                
                {/* <h2>Glass Surface Content</h2> */}
                <ToggleTheme/>
            </GlassSurface>

            {/* // Custom displacement effects */}
            <GlassSurface
                displace={15}
                distortionScale={-150}
                redOffset={5}
                greenOffset={15}
                blueOffset={25}
                brightness={60}
                opacity={0.8}
                mixBlendMode="screen"
                width="100%"
            >
                <span>Advanced Glass Distortion</span>
            </GlassSurface>
        </div>
    )
}