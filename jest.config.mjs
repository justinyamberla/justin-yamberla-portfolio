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
        // Versión ESM de @react-email/render: así SWC convierte su import() dinámico en require()
        "^@react-email/render$": "<rootDir>/node_modules/@react-email/render/dist/node/index.mjs",
    },
    testPathIgnorePatterns: ["<rootDir>/react-email-starter/"],
};

// Paquetes de node_modules que Jest debe transformar con SWC antes de cargarlos:
//   - Dependencias de MSW publicadas sólo como ESM (Jest carga los módulos como CommonJS)
//   - @react-email/render usa import() dinámico, que Jest no ejecuta sin --experimental-vm-modules
const packagesToTransform = [
    "rettime",
    "@open-draft/deferred-promise",
    "until-async",
    "@react-email/render",
];

// next/jest no deja reemplazar transformIgnorePatterns desde config, así que se ajusta el resultado
async function jestConfig() {
    const resolvedConfig = await createJestConfig(config)();
    resolvedConfig.transformIgnorePatterns[0] = `/node_modules/(?!(${packagesToTransform.join("|")})/)`;
    return resolvedConfig;
}

export default jestConfig;
