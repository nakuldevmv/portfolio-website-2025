
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import style from "./toggleTheme.module.css"

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => { setTheme(theme == "light" ? "dark" : "light") }}
            className={style.btn}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
            {theme == "light" ? <Moon size={19} /> : <Sun size={19} />}
        </button>
    )

}
