"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import {useActiveSectionContext} from "@/context/active-section-context";

export default function Intro() {

    const { ref } = useSectionInView("Inicio", 0.5);
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return(
        <section ref={ref} id="incio" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{type: "tween", duration: 0.2}}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                            alt="Justin portrait"
                            width="200"
                            height="200"
                            quality="95"
                            priority={true}
                            className="h-40 w-40 rounded-full object-cover border-[0.35rem] border-white dark:border-slate-950 shadow-xl"
                        />
                        <motion.span
                            className="absolute bottom-0 right-0 text-4xl"
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{type: "spring", stiffness: 125, delay: 0.5, duration: 0.7}}
                        >
                        👋
                        </motion.span>
                    </motion.div>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">¡Hola! Soy Justin Yamberla.</span> Soy Ingeniero de Software y Desarrollador Full Stack con 3 años
                de experiencia. Disfruto mucho crear soluciones tecnológicas, apliciones web y apps móviles.
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay: 0.1}}
            >
                <Link
                    href="#contact"
                    className="group bg-slate-800 dark:bg-slate-950 outline-none text-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:bg-slate-900 dark:hover:bg-slate-700 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contáctame <BsArrowRight />
                </Link>
                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none text-slate-800 dark:text-slate-100/50 hover:text-slate-950 dark:hover:text-slate-100 focus:scale-110 hover:scale-110 hover:bg-slate-500/10 active:scale-105 transition cursor-pointer border-black/10 dark:bg-slate-200/10"
                    href="/CV_Justin%20Yamberla.pdf"
                    download
                >
                    Descargar CV <HiDownload />
                </a>
                <a
                    className="bg-white p-4 text-slate-800 hover:text-slate-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-slate-500/10 active:scale-105 transition cursor-pointer border-black/10 dark:bg-slate-200/10 dark:text-slate-100/50 dark:hover:text-slate-100"
                    href="https://www.linkedin.com/in/justin-yamberla-096238198/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a
                    className="bg-white p-4 text-slate-800 dark:hover:text-slate-100 flex items-center gap-2 text-[1.30rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-slate-500/10 hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10 dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/justinyamberla"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}