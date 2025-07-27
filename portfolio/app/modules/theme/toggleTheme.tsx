
// import { useTheme } from "next-themes";
// import style from "./toggleTheme.module.css"
import ThemeToggleButton from "@/components/ui/theme-toggle-button";

export default function ToggleTheme() {
    // const { theme, setTheme } = useTheme();

    return (

        <ThemeToggleButton start="top-right"/>


        // <button className={style.btn} onClick={() => { setTheme(theme == "light" ? "dark" : "light") }}>
        //     {theme == "light" ? "Dark Mode" : "Light Mode"}
        // </button>
    )

}
