// Matchers para el DOM: toBeInTheDocument(), toBeDisabled(), toHaveValue()...
import "@testing-library/jest-dom";

// jsdom no implementa IntersectionObserver, que usan useSectionInView y las animaciones whileInView.
// Importar estas utilidades lo reemplaza por un mock antes de cada test.
import "react-intersection-observer/test-utils";

// Los tests nunca usan la clave real del .env: el SDK de Resend la lee al importarse,
// por eso se define aquí, antes de que cualquier test importe actions/sendEmail.ts
process.env.RESEND_API_KEY = "re_test_123";

// Los tests de código de servidor corren en el entorno node, donde no existe window
if (typeof window !== "undefined") {
    // jsdom tampoco implementa matchMedia, que usa el Toaster de react-hot-toast (prefers-reduced-motion).
    // Se simula un navegador donde ninguna media query coincide.
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: (query: string) => ({
            matches: false,
            media: query,
            onchange: null,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            addListener: jest.fn(),
            removeListener: jest.fn(),
            dispatchEvent: jest.fn(),
        }),
    });
}
