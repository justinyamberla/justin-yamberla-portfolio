"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {FaPaperPlane} from "react-icons/fa";
import {useSectionInView} from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {

    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem]"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading>Contáctame</SectionHeading>
            <p className="text-slate-800 -mt-5">
                Please contact me directly at
                <a className="underline" href="mailto:example@mail.com">example@mail.com</a>
            </p>

            <form
                className="mt-10 flex flex-col"
                action={async (formData: FormData) => {
                    await sendEmail(formData);
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 borderBlack"
                    type="email"
                    name="senderEmail"
                    placeholder="Your email"
                    required
                    maxLength={500}
                />
                <textarea
                    className="h-53 my-3 rounded-lg borderBlack p-4 bg-slate-100 dark:bg-slate-800"
                    placeholder="Your message"
                    name="message"
                    required
                    maxLength={5000}
                />
                <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-slate-800 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105"
                >
                    Submit{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />{" "}
                </button>
            </form>
        </motion.section>
    )
}