"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import {experiencesData} from "@/lib/data";
import {useSectionInView} from "@/lib/hooks";

export default function Experience() {

    const { ref } = useSectionInView("Experience");

    return (
        <section
            ref={ref}
            id="experience"
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>Mi experiencia</SectionHeading>
            <VerticalTimeline lineColor="#9ca3af">
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    background: "#f3f4f6",
                                    boxShadow: "none",
                                    border: "1px solid #e5e7eb",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem"
                                }}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid #9ca3af",
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background: "white",
                                    fontSize: "1.5rem"
                                }}
                            >
                                <h3 className="font-semibold">
                                    {item.title}
                                </h3>
                                <p className="font-normal !mt-0">
                                    {item.location}
                                </p>
                                <p className="!mt-1 !font-normal text-slate-800">
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
