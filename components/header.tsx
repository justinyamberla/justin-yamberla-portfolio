"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-slate-950/10 border-opacity-40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[41rem] sm:rounded-full dark:bg-slate-950/80 dark:border-teal-300/10 dark:bg-opacity-25"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-600 dark:text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {
                        links.map(link => (
                            <motion.li
                                key={link.hash}
                                className="h-3/4 flex item-center justify-center relative"
                                initial={{y: -100, opacity: 0}}
                                animate={{y: 0, opacity: 100}}
                            >
                                <Link
                                    href={link.hash}
                                    className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-slate-300 dark:hover:text-slate-400 transition", {"text-slate-100 dark:text-slate-200": activeSection === link.name})}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                    }}
                                >
                                    {link.name}
                                    {link.name === activeSection && (
                                        <motion.span
                                            className="bg-slate-800 dark:bg-slate-600/50 rounded-full absolute inset-0 -z-10"
                                            layoutId="activeSection"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        >
                                        </motion.span>
                                    )}
                                </Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}