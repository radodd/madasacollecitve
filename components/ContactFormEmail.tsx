import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  fullName: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export default function EmailStyle({
  fullName,
  company,
  phoneNumber,
  message,
  email,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from Madasa Site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>From: {fullName}</Text>
              <Text>Where they work: {company}</Text>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {email}</Text>
              <Text>The sender&apos;s contact number: {phoneNumber}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
