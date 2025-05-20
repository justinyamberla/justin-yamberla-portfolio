import Image from "next/image";
import Intro from "@/components/intro";
import React from "react";
import ThemeToggle from "@/components/ui/mode-toggle";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <div className="fixed bottom-0 right-0 py-4 px-4">
                <ThemeToggle/>
            </div>
            <Intro/>
        </main>
    );
}
