import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SubmitBtn from "@/components/submit-btn";

describe("SubmitBtn", () => {
    it("muestra el texto Submit y está habilitado", () => {
        render(<SubmitBtn />);

        const button = screen.getByRole("button", { name: /submit/i });
        expect(button).toBeEnabled();
        expect(button).toHaveAttribute("type", "submit");
    });

    it("se deshabilita y oculta el texto mientras el formulario se envía", async () => {
        const user = userEvent.setup();

        // La acción queda pendiente hasta que el test llame a terminarEnvio()
        let terminarEnvio!: () => void;
        const accion = () => new Promise<void>((resolve) => (terminarEnvio = resolve));

        render(
            <form action={accion}>
                <SubmitBtn />
            </form>,
        );

        await user.click(screen.getByRole("button", { name: /submit/i }));

        const button = screen.getByRole("button", { name: /enviando/i }); // ← aquí
        expect(button).toBeDisabled();

        terminarEnvio();

        expect(await screen.findByRole("button", { name: /submit/i })).toBeEnabled();
    });
});
