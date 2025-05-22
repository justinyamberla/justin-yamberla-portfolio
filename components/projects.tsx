"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {

    const { ref } = useSectionInView("Projects");

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>Mis últimos proyectos</SectionHeading>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))}
        </section>
    );
}