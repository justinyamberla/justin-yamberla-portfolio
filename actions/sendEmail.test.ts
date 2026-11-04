/**
 * @jest-environment node
 */
// sendEmail es una Server Action: corre en el servidor, así que se prueba en Node y no en jsdom

import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { sendEmail } from "@/actions/sendEmail";

const RESEND_URL = "https://api.resend.com/emails";

// Peticiones que recibió el "servidor de Resend" falso en cada test
let peticiones: Request[] = [];

// Por defecto, Resend responde que el email se envió
const server = setupServer(
    http.post(RESEND_URL, ({ request }) => {
        peticiones.push(request.clone());
        return HttpResponse.json({ id: "email_123" });
    }),
);

// onUnhandledRequest: "error" hace fallar el test si el código intenta llamar a cualquier otra URL
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => {
    server.resetHandlers();
    peticiones = [];
});
afterAll(() => server.close());

function crearFormData(senderEmail: string, message: string) {
    const formData = new FormData();
    formData.set("senderEmail", senderEmail);
    formData.set("message", message);
    return formData;
}

describe("sendEmail", () => {
    describe("validación", () => {
        it("rechaza un email vacío sin llamar a Resend", async () => {
            const result = await sendEmail(crearFormData("", "Hola"));

            expect(result).toEqual({ error: "Invalid sender email" });
            expect(peticiones).toHaveLength(0);
        });

        it("rechaza un mensaje compuesto sólo por espacios sin llamar a Resend", async () => {
            const result = await sendEmail(crearFormData("ana@correo.com", "   "));

            expect(result).toEqual({ error: "Invalid message" });
            expect(peticiones).toHaveLength(0);
        });
    });

    describe("cuando Resend acepta el email", () => {
        it("devuelve éxito", async () => {
            const result = await sendEmail(crearFormData("ana@correo.com", "Hola"));

            expect(result).toEqual({
                success: true,
                data: { data: { id: "email_123" }, error: null },
            });
        });

        it("envía a Resend la petición correcta", async () => {
            await sendEmail(crearFormData("ana@correo.com", "Me interesa tu trabajo"));

            expect(peticiones).toHaveLength(1);
            const [peticion] = peticiones;
            expect(peticion.headers.get("Authorization")).toBe("Bearer re_test_123");

            const body = await peticion.json();
            expect(body).toMatchObject({
                to: "imalexisdzn@gmail.com",
                subject: "Message from contact form on portfolio",
                reply_to: "ana@correo.com",
            });
            // La plantilla de React se convirtió en HTML con el mensaje y el remitente
            expect(body.html).toContain("Me interesa tu trabajo");
            expect(body.html).toContain("ana@correo.com");
        });
    });

    describe("cuando Resend falla", () => {
        it("devuelve el error si Resend rechaza la petición", async () => {
            server.use(
                http.post(RESEND_URL, () =>
                    HttpResponse.json(
                        {
                            statusCode: 403,
                            name: "validation_error",
                            message: "You can only send testing emails to your own email address.",
                        },
                        { status: 403 },
                    ),
                ),
            );

            const result = await sendEmail(crearFormData("ana@correo.com", "Hola"));

            expect(result).toEqual({
                error: "You can only send testing emails to your own email address.",
            });
        });

        it("devuelve un error si no hay conexión con Resend", async () => {
            server.use(http.post(RESEND_URL, () => HttpResponse.error()));

            const result = await sendEmail(crearFormData("ana@correo.com", "Hola"));

            expect(result).toHaveProperty("error");
            expect(result).not.toHaveProperty("success");
        });
    });
});
