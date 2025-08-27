'use client'
import useWindowWidth from '../../helperFunction/getwidth/getWidth';
import AuroraBackground from "@/components/ui/aurora-background"
import { MeshGradient } from '@paper-design/shaders-react';
import { useTheme } from "next-themes";





export default function Wallpaper() {
   const { theme } = useTheme(); // 'light' or 'dark'

  const darkColorsBase = ["#121212", "#C5B8FF", "#abff2e", "#00D6D3"];
  const darkColorsOverlay = ["#121212", "#abff2e", "#00D6D3", "#C5B8FF"];

  const lightColorsBase = ["#e0e0e0", "#9880FF", "#abff2e", "#00A7A4"];
  const lightColorsOverlay = ["#e0e0e0", "#abff2e", "#00A7A4", "#9880FF"];

  const baseColors = theme === "dark" ? darkColorsBase : lightColorsBase;
  const overlayColors = theme === "dark" ? darkColorsOverlay : lightColorsOverlay;

  return (
    <div className="absolute inset-0  m-3  overflow-hidden rounded-[29px]">
      {/* Base gradient layer */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={baseColors}
        distortion={0.5}

        speed={0.3}
        backgroundColor={theme === "dark" ? "#121212" : "#e0e0e0"}
      />

      {/* Overlay wireframe layer */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60"
        colors={overlayColors}
        distortion={1}
        speed={0.2}
        wireframe="true"
        backgroundColor="transparent"
      />
    </div>
  );
}