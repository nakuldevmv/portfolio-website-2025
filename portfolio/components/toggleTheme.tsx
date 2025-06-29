import { useTheme } from "next-themes";

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme();

    return (
        <button onClick={() => { setTheme(theme == "light" ? "dark" : "light") }}>
            {theme == "light" ? "Dark Mode" : "Light Mode"}
        </button>
    )
}
