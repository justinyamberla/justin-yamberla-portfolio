import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import toast, { Toaster } from "react-hot-toast";
import Contact from "@/components/contact";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { sendEmail } from "@/actions/sendEmail";

// La Server Action se reemplaza por un mock: en el test no hay servidor de Next que la ejecute
jest.mock("@/actions/sendEmail", () => ({
    sendEmail: jest.fn(),
}));

const sendEmailMock = jest.mocked(sendEmail);

// Contact necesita el Provider (por useSectionInView) y el Toaster (que en la app está en layout.tsx)
function renderContact() {
    return render(
        <ActiveSectionContextProvider>
            <Contact />
            <Toaster />
        </ActiveSectionContextProvider>,
    );
}

async function llenarYEnviar(email: string, mensaje: string) {
    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText("Tu email"), email);
    await user.type(screen.getByPlaceholderText("Tu mensaje"), mensaje);
    await user.click(screen.getByRole("button", { name: /submit/i }));
}

describe("Contact", () => {
    beforeEach(() => {
        sendEmailMock.mockReset();
    });

    // react-hot-toast guarda los toasts en un estado global que sobrevive entre tests
    afterEach(() => {
        act(() => toast.remove());
    });

    it("envía el email y el mensaje escritos por el usuario", async () => {
        sendEmailMock.mockResolvedValue({ success: true, data: { data: null, error: null } });
        renderContact();

        await llenarYEnviar("ana@correo.com", "Hola, me interesa tu trabajo");

        expect(sendEmailMock).toHaveBeenCalledTimes(1);
        const formData = sendEmailMock.mock.calls[0][0];
        expect(formData.get("senderEmail")).toBe("ana@correo.com");
        expect(formData.get("message")).toBe("Hola, me interesa tu trabajo");
    });

    it("muestra un aviso de éxito cuando el envío funciona", async () => {
        sendEmailMock.mockResolvedValue({ success: true, data: { data: null, error: null } });
        renderContact();

        await llenarYEnviar("ana@correo.com", "Hola");

        expect(await screen.findByText("Email sent successfully")).toBeInTheDocument();
    });

    it("muestra el error devuelto por la Server Action", async () => {
        sendEmailMock.mockResolvedValue({ error: "Invalid message" });
        renderContact();

        await llenarYEnviar("ana@correo.com", "Hola");

        expect(await screen.findByText("Invalid message")).toBeInTheDocument();
        expect(screen.queryByText("Email sent successfully")).not.toBeInTheDocument();
    });

    it("no envía nada si los campos obligatorios están vacíos", async () => {
        const user = userEvent.setup();
        renderContact();

        await user.click(screen.getByRole("button", { name: /submit/i }));

        expect(sendEmailMock).not.toHaveBeenCalled();
    });
});
