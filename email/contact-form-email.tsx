import React from "react";
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
}

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
    return <Html>
        <Head>
            <title>Contact Form Email</title>
            <Preview>New message from your portfolio site</Preview>
            <Tailwind />
        </Head>
        <Body className="bg-white text-black">
            <Container className="p-4">
                <Section className="mb-4">
                    <Heading className="text-2xl font-bold">You received the following message from the contact form</Heading>
                </Section>
                <Hr />
                <Section className="mt-4">
                    <Text className="text-lg">{message}</Text>
                    <Hr />
                    <Text className="text-lg">The sender email is: {senderEmail}</Text>
                </Section>
            </Container>
        </Body>
    </Html>
}