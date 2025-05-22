"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {

    const { ref } = useSectionInView("Acerca");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="acerca"
        >
            <SectionHeading>Acerca de mí</SectionHeading>
            <p className="mb-3">
                Desde muy joven me fascinó mucho el mundo de la {" "}
                <span className="font-medium">Programación</span>, por lo que decidí estudiar una carrera de{" "}
                <span className="font-medium">Ingeniería de Software</span> para convertirme en un excelente
                desarrollador.{" "}
                <span className="italic">Mi aspecto favorito del desarrollo</span> es la resolución de problemas.
                Me encanta ese sentimiento de por fin dar con la solución a cualquier
                problema que se me presente. Actualmente, mi stack es{" "}<span className="font-medium">
                PHP, Javascript, React, React Native, Next.js, MySQL, MongoDB y tecnologías relacionadas con el
                desarrollo web y móvil</span>, aunque siempre estoy aprendiendo algo nuevo.
                Actualmente busco un puesto como{" "}<span className="font-medium">desarrollador de software</span>{" "}
                y planeo con el tiempo liderar mi propia marca.
            </p>

            <p>
                <span className="italic">Cuando no estoy programando</span>, paso mi tiempo haciendo ejercicio,
                saliendo con amigos de fiesta o pasando en familia. También disfruto{" "}
                <span className="font-medium">aprender cosas nuevas</span>. Ahora mismo estoy entrenando{" "}
                <span className="font-medium">Artes Marciales Mixtas</span> y aprendiendo sobre emprendimiento.
            </p>
        </motion.section>
    );
}