import Intro from "@/components/intro";
import React from "react";
import ThemeToggle from "@/components/ui/mode-toggle";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <div className="fixed bottom-0 right-0 py-4 px-4">
                <ThemeToggle/>
            </div>
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </main>
    );
}
