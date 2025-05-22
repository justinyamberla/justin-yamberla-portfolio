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
            className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100/60 dark:bg-white/10 backdrop-blur-md border border-gray-400/50 shadow-md transition hover:bg-gray-300/50 dark:hover:bg-white/20"
        >
            {isDark ? (
                <Sun className="h-5 w-5 text-yellow-200" />
            ) : (
                <Moon className="h-5 w-5 text-gray-800" />
            )}
        </button>
    )
}
