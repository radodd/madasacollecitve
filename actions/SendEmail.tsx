"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/components/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const fullName = formData.get("fullName");
  const company = formData.get("company");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const message = formData.get("message");

  console.log("running on server");
  console.log(formData);
  console.log(formData.get("fullName"));
  console.log(formData.get("company"));
  console.log(formData.get("email"));
  console.log(formData.get("phoneNumber"));
  console.log(formData.get("message"));
  //   server-side validation
  if (!validateString(fullName, 500)) {
    return {
      error: "Invalid sender name",
    };
  }
  if (!validateString(company, 500 || 0)) {
    return {
      error: "Invalid sender company",
    };
  }
  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(phoneNumber, 500)) {
    return {
      error: "Invalid sender phone number",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // "as string" asserts the inputs have been validated and are strings.
  // must be explicitly stated because typescript does not pick up on the helper function (server-side)
  // or the user-side validations

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact from Portfolio Site<onboarding@resend.dev>",
      to: "ethan.flores.js@gmail.com",
      subject: "message from contact form",
      // text: message as string,
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        fullName: fullName,
        company: company,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
