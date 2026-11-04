"use server";

import { CreateEmailResponse, Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { render } from "@react-email/components";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailResponse = { error: string } | { success: true; data: CreateEmailResponse };

export const sendEmail = async (formData: FormData): Promise<EmailResponse> => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return { error: "Invalid sender email" };
    }

    if (!validateString(message, 5000)) {
        return { error: "Invalid message" };
    }

    try {
        // La plantilla se convierte a HTML aquí, en vez de pasarla en `react` para que la renderice el SDK
        const html = await render(
            React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        );

        const { data, error } = await resend.emails.send({
            from: "Contact Form From Portfolio <onboarding@resend.dev>",
            to: "imalexisdzn@gmail.com",
            subject: "Message from contact form on portfolio",
            replyTo: senderEmail as string,
            html,
        });

        if (error) {
            return { error: error.message };
        }

        return { success: true, data: { data, error } };
    } catch (error: unknown) {
        return getErrorMessage(error);
    }
};
