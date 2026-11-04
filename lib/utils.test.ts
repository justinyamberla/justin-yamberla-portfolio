import { cn, getErrorMessage, validateString } from "@/lib/utils";

describe("validateString", () => {
    it("acepta un string dentro del límite", () => {
        expect(validateString("hola", 10)).toBe(true);
    });

    it("acepta un string con exactamente el largo máximo", () => {
        expect(validateString("a".repeat(10), 10)).toBe(true);
    });

    it("rechaza un string más largo que el máximo", () => {
        expect(validateString("a".repeat(11), 10)).toBe(false);
    });

    it("rechaza un string vacío", () => {
        expect(validateString("", 10)).toBe(false);
    });

    it.each([null, undefined, 123, {}, ["hola"]])(
        "rechaza valores que no son string: %p",
        (value) => {
            expect(validateString(value, 10)).toBe(false);
        },
    );

    it("cuenta los espacios al medir el largo", () => {
        expect(validateString("  hola  ", 6)).toBe(false); // 8 > 6
        expect(validateString("  hola  ", 8)).toBe(true); // 8 = 8, justo en el límite
    });

    // Documenta el comportamiento actual: un mensaje con sólo espacios se considera válido
    it("rechaza un string compuesto sólo por espacios", () => {
        expect(validateString("   ", 10)).toBe(false);
    });
});

describe("getErrorMessage", () => {
    it("usa el mensaje de una instancia de Error", () => {
        expect(getErrorMessage(new Error("Falló Resend"))).toEqual({ error: "Falló Resend" });
    });

    it("usa la propiedad message de un objeto que no es Error", () => {
        expect(getErrorMessage({ message: "Límite excedido", statusCode: 429 })).toEqual({
            error: "Límite excedido",
        });
    });

    it("usa el string recibido tal cual", () => {
        expect(getErrorMessage("Sin conexión")).toEqual({ error: "Sin conexión" });
    });

    it.each([null, undefined, 42, { message: 500 }])(
        "devuelve un mensaje genérico para valores desconocidos: %p",
        (value) => {
            expect(getErrorMessage(value)).toEqual({ error: "Unknown error" });
        },
    );
});

describe("cn", () => {
    it("une clases y descarta valores falsos", () => {
        expect(cn("flex", false && "hidden", undefined, "gap-2")).toBe("flex gap-2");
    });

    it("cuando dos clases de Tailwind chocan, gana la última", () => {
        expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
    });
});
