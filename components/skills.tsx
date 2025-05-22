"use client";

import React from 'react';
import SectionHeading from "@/components/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),
}

export default function Skills() {

    const { ref } = useSectionInView("Habilidades");

    return (
        <section
            ref={ref}
            id="habilidades"
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>Mis habilidades</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-800 dark:text-slate-200">
                {
                    skillsData.map((skill, index) => (
                        <motion.li
                            key={index}
                            className="bg-slate-300 dark:bg-slate-800 border-black/[0.1] rounded-xl px-5 py-3"
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    );
}