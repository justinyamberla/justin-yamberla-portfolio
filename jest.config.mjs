import nextJest from "next/jest.js";

// next/jest aplica la misma configuración que usa Next al compilar:
// transforma TypeScript/JSX con SWC, carga los .env e ignora .next y node_modules
const createJestConfig = nextJest({
    dir: "./",
});

/** @type {import('jest').Config} */
const config = {
    // Navegador simulado para poder renderizar componentes
    testEnvironment: "jsdom",
    // Se ejecuta antes de cada archivo de test, con Jest ya cargado
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    // Mismo alias que tsconfig.json ("@/*": ["./*"]), para que "@/lib/utils" se resuelva en los tests
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
    },
    testPathIgnorePatterns: ["<rootDir>/react-email-starter/"],
};

export default createJestConfig(config);
