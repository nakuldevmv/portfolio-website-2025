import { useTheme } from "next-themes";
import style from "./toggleTheme.module.css"

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    return (
        <button className={style.btn} onClick={() => { setTheme(theme == "light" ? "dark" : "light") }}>
            {theme == "light" ? "Dark Mode" : "Light Mode"}
        </button>
    )
}
