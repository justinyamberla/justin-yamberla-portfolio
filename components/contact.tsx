"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";

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
                    const { data, error } =  await sendEmail(formData);

                    if (error) {
                        toast.error(error.message);
                        return;
                    }

                    toast.success("Email sent successfully");
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 borderBlack dark:focus:bg-opacity-100 transition-all dark:outline-none"
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
                <SubmitBtn />
            </form>
        </motion.section>
    )
}