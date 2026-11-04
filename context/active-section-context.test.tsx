import { act, renderHook } from "@testing-library/react";
import ActiveSectionContextProvider, {
    useActiveSectionContext,
} from "@/context/active-section-context";

describe("useActiveSectionContext", () => {
    it("lanza un error si se usa fuera del Provider", () => {
        // React reporta el error con console.error: se silencia para no ensuciar la salida del test
        const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});

        expect(() => renderHook(() => useActiveSectionContext())).toThrow(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider",
        );

        consoleError.mockRestore();
    });

    it("empieza con la sección Inicio y permite cambiarla", () => {
        const { result } = renderHook(() => useActiveSectionContext(), {
            wrapper: ActiveSectionContextProvider,
        });

        expect(result.current.activeSection).toBe("Inicio");

        act(() => result.current.setActiveSection("Contacto"));

        expect(result.current.activeSection).toBe("Contacto");
    });
});
