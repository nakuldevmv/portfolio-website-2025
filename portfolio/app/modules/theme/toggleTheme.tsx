import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import style from "./toggleTheme.module.css"
import { useEffect, useState } from "react";

export default function ToggleTheme() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className={style.btn} aria-label="Toggle theme">
                <span style={{ width: 19, height: 19, display: 'inline-block' }}></span>
            </button>
        );
    }

    return (
        <button
            onClick={() => { setTheme(resolvedTheme === "light" ? "dark" : "light") }}
            className={style.btn}
            aria-label={resolvedTheme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
            {resolvedTheme === "light" ? <Moon size={19} /> : <Sun size={19} />}
        </button>
    )

}
