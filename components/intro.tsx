"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
    return(
        <section>
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
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white dark:border-gray-950 shadow-xl"
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
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">¡Hola! Soy Justin Yamberla.</span> Soy Ingeniero de Software y Desarrollador Full Stack con 3 años
                de experiecia. Disfruto mucho crear soluciones tecnológicas, apliciones web y apps móviles.
            </motion.h1>
        </section>
    );
}