import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Switch } from "./ui/switch";

export default function ToggleTheme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
        </>
    )
}