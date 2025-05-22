import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sistemaRecaudacion from "@/public/sistemaRecaudacion.png"
import granBazarAutos from "@/public/granBazarAutos.png"
import innerDroid from "@/public/innerDroid.png"
import appRecaudacion from "@/public/appRecaudacion.png"

export const links = [
    {
        name: "Inicio",
        hash: "#inicio",
    },
    {
        name: "Acerca",
        hash: "#acerca",
    },
    {
        name: "Proyectos",
        hash: "#proyectos",
    },
    {
        name: "Habilidades",
        hash: "#habilidades",
    },
    {
        name: "Experiencia",
        hash: "#experiencia",
    },
    {
        name: "Contacto",
        hash: "#contacto",
    },
] as const;

export const experiencesData = [
    {
        title: "Ingeniería de Software",
        location: "Quito, Ecuador",
        description: "Me gradué como Ingeniero de Software después de una carrera de 4 años en la Escuela Politécnica Nacional, e inmediatemante comencé a trabajar como desarrollador frontend.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2023",
    },
    {
        title: "Desarrollador Móvil Full-stack",
        location: "Manabí, Ecuador",
        description: "Trabajé como desarrollador móvil y full-stack durante casi un año de manera remota para Innovus Software. Me encargué del desarrollo de una plataforma de compra y venta de autos, así como de la app InnerDroid.",
        icon: React.createElement(FaReact),
        date: "2023 - 2024",
    },
    {
        title: "Analista de Desarrollo de Sistemas",
        location: "Otavalo, Ecuador",
        description: "Después de trabajar como desarrollador móvil, me uní al GAD Municipal de Otavalo como analista de desarrollo de sistemas. Me encargué del desarrollo de una app para el cobro de tarifas a comerciantes y la API REST del sistema de recaudación.",
        icon: React.createElement(CgWorkAlt),
        date: "2024 - 2025",
    },
] as const;

export const projectsData = [
    {
        title: "App de Recaudación",
        description: "Desarrollé una app para el cobro de tarifas a comerciantes como parte del Sistema de Recaudación para el GAD Municipal de Otavalo.",
        tags: ["React", "TypeScript", "React Native", "Expo", "Async Storage"],
        imageUrl: appRecaudacion,
    },
    {
        title: "Sistema de Recaudación",
        description: "Sistema de Recaudación para el cobro de tarifas a comerciantes para el GAD Municipal de Otavalo. Desarrollé la aplicación web de administración y la API REST.",
        tags: ["PHP", "MySQL", "JWT", "JavaScript", "Bootstrap"],
        imageUrl: sistemaRecaudacion,
    },
    {
        title: "InnerDroid",
        description: "Desarrollador móvil full-stack en Innovus Software. Me encargué de la refactorización, optimización, mantenimiento y desarrollo de nuevas funcionalidades de la app InnerDroid.",
        tags: ["React Native", "Expo", "PHP", "MySQL", "MongoDB"],
        imageUrl: innerDroid,
    },
    {
        title: "Gran Bazar de Autos",
        description: "Como desarrollador frontend en Innovus Software, trabajé en la creación del frontend para una plataforma de compra y venta de autos, así como la conexión con el backend.",
        tags: ["React", "Next.js", "React Bootstrap", "JavaScript", "SASS"],
        imageUrl: granBazarAutos,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind",
    "PHP",
    "Laravel",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Python",
    "Flask",
    "React Native",
    "Expo",
    "Kotlin",
    "Firebase",
    "Git",
    "GitHub",
] as const;
