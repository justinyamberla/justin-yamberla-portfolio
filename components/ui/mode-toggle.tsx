"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = theme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 dark:bg-slate-800/50 backdrop-blur-md shadow-md transition hover:bg-slate-950 dark:hover:bg-slate-800"
        >
            {isDark ? (
                <Sun className="h-5 w-5 text-slate-100" />
            ) : (
                <Moon className="h-5 w-5 text-slate-300 hover:text-slate-100" />
            )}
        </button>
    )
}
