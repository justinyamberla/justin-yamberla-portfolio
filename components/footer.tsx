import React from 'react';

export default function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-slate-900 dark:text-slate-200">
            <small className="mb-2 block text-xs">
                &copy; 2025 Justin Yamberla. Todos los derechos reservados.
            </small>
            <p className="text-xs">
                <span className="font-semibold">Acerca de este sitio:</span> hecho con React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
            </p>
        </footer>
    )
}