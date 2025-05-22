"use client";

import React, {useEffect, useState} from "react";
import SectionHeading from "@/components/section-heading";
// @ts-expect-error
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "next-themes";

export default function Experience() {

    const { ref } = useSectionInView("Experiencia");
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section
            ref={ref}
            id="experiencia"
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>Mi experiencia</SectionHeading>
            <VerticalTimeline lineColor={theme === "dark" ? "#1e293b" : "#f3f4f6"}>
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    background: theme === "dark" ? "#1e293b" : "#f3f4f6",
                                    boxShadow: "none",
                                    border: `1px solid ${theme === "dark" ? "#334155" : "#e2e8f0"}`,
                                    textAlign: "left",
                                    padding: "1.3rem 2rem"
                                }}
                                contentArrowStyle={{
                                    borderRight: `0.4rem solid ${theme === "dark" ? "#1e293b" : "#f3f4f6"}`,
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background: theme === "dark" ? "#1e293b" : "#f3f4f6",
                                    fontSize: "1.5rem"
                                }}
                            >
                                <h3 className="font-semibold">
                                    {item.title}
                                </h3>
                                <p className="font-normal !mt-0">
                                    {item.location}
                                </p>
                                <p className="!mt-1 !font-normal text-slate-800 dark:text-slate-200">
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    );
}
