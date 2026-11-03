import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    // Archivos que no son código fuente del portfolio
    {
        ignores: [
            ".next/**",
            "out/**",
            "build/**",
            "coverage/**",
            "next-env.d.ts",
            "react-email-starter/**",
        ],
    },
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    // Siempre al final: apaga las reglas de estilo que chocan con Prettier
    eslintConfigPrettier,
];

export default eslintConfig;
