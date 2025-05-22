"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";

export default function Contact() {

    const { ref } = useSectionInView("Contacto");

    return (
        <motion.section
            ref={ref}
            id="contacto"
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
            <p className="text-slate-800 dark:text-slate-200 -mt-5">
                Por favor, contáctame directamente escribiendo a {" "}
                <a className="underline" href="mailto:imalexisdzn@gmail.com">imalexisdzn@gmail.com</a>
            </p>

            <form
                className="mt-10 flex flex-col"
                action={async (formData: FormData) => {
                    const result = await sendEmail(formData);

                    if ('error' in result) {
                        toast.error(result.error);
                        return;
                    }

                    toast.success("Email sent successfully");
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg bg-white dark:bg-slate-800/70 borderBlack dark:focus:bg-opacity-100 transition-all"
                    type="email"
                    name="senderEmail"
                    placeholder="Tu email"
                    required
                    maxLength={500}
                />
                <textarea
                    className="h-53 my-3 rounded-lg borderWhite p-4 bg-white dark:bg-slate-800/70 dark:focus:bg-opacity-100 transition-all"
                    placeholder="Tu mensaje"
                    name="message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}