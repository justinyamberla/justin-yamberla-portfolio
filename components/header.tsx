"use client";

import React, {useState} from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";

export default function Header() {

    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-slate-950/10 border-opacity-40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[37rem] sm:rounded-full dark:bg-slate-950/80 dark:border-teal-300/10 dark:bg-opacity-25"
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
                                    className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-slate-950 dark:hover:text-teal-200 transition", {"text-slate-950 dark:text-teal-200": activeSection === link.name})}
                                    onClick={() => setActiveSection(link.name)}
                                >
                                    {link.name}
                                    {link.name === activeSection && (
                                        <motion.span
                                            className="bg-slate-200 dark:bg-slate-900 rounded-full absolute inset-0 -z-10"
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