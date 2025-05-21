import React from 'react';
import SectionHeading from "@/components/section-heading";
import {skillsData} from "@/lib/data";

export default function Skills() {
    return (
        <section id="skills">
            <SectionHeading>Mis habilidades</SectionHeading>
            <ul>
                {
                    skillsData.map((skill, index) => (
                        <li key={index}>
                            {skill}
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}