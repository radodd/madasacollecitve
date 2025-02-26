"use client";

import { sendEmail } from "@/actions/SendEmail";
import Button from "@/components/Button";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import styles from "./ContactForm.module.scss";
import { Fields, UseFormInputReturn } from "@/index";
import { contactFormSchema } from "@/lib/ContactFormValidation";
import ReCAPTCHA from "react-google-recaptcha";

const useFormInput = (initialValue: string): UseFormInputReturn => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
    reset: () => setValue(""),
  };
};

export default function ContactForm() {
  const fullName = useFormInput("");
  const company = useFormInput("");
  const email = useFormInput("");
  const phoneNumber = useFormInput("");
  const message = useFormInput("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    console.log("Submit Handler accessed");

    if (!recaptchaToken) {
      alert("Please complete reCAPTCHA verification.");
      return;
    }

    formData.append("recaptchaToken", recaptchaToken);
    const data = {
      fullName: fullName.value,
      company: company.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      message: message.value,
    };
    const validation = contactFormSchema.safeParse(data);
    console.log(validation);
    if (!validation.success) {
      console.log(validation.error.issues);

      const fieldErrors = validation.error.flatten().fieldErrors;
      const formattedErrors: Record<string, string> = {};

      Object.entries(fieldErrors).forEach(([key, value]) => {
        if (value) formattedErrors[key] = value[0];
      });

      setErrors(formattedErrors);
      console.log("formattedErrors", formattedErrors);
      console.log("Errors", errors);
      toast.error("Please correct the highlighted fields.");
      return;
    }

    setErrors({});

    const verifyResponse = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: recaptchaToken }),
    });

    const verifyData = await verifyResponse.json();
    if (!verifyData.success) {
      toast.error("reCAPTCHA verification failed.");
      return;
    }

    const response = await sendEmail(formData);
    if (response.error) {
      toast.error(response.error);
      return;
    }

    toast.success("Email sent successfully!");
    fullName.reset();
    company.reset();
    email.reset();
    phoneNumber.reset();
    message.reset();
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form
          onSubmit={async (e) => {
            console.log("Form submitted!");
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            await handleSubmit(formData);
          }}
          id="contactForm"
          className={styles.form}
        >
          {Fields(fullName, company, email, phoneNumber).map(
            ({ label, inputProps, name, type, required }, index) => (
              <div
                key={index}
                className={`${styles.animateLabel} flex flex-col`}
              >
                <input
                  type={type}
                  name={name}
                  value={inputProps.value}
                  onChange={inputProps.onChange}
                  className={`${styles.input} h-[57px] px-4 rounded-md ${
                    errors[name] ? "border-red-500" : ""
                  } `}
                  autoComplete="off"
                  aria-label={label}
                  required={required}
                />
                <label>{label}</label>
                {errors[name] && (
                  <span className="absolute bottom-[-25px] text-red-500 text-sm">
                    {errors[name]}
                  </span>
                )}
              </div>
            )
          )}

          <div className={`${styles.animateLabelMessage} col-span-2`}>
            <textarea
              name="message"
              value={message.value}
              onChange={message.onChange}
              className={`${styles.input}  px-4 rounded-md`}
              autoComplete="off"
              aria-label="Message"
              required
            />
            <label>Message *</label>
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>

          <div className={styles.buttonContainer}>
            <ReCAPTCHA
              // className="border border-green-400 h-[600px] z-50"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={setRecaptchaToken}
            />
            <Button
              type="submit"
              variant="btn-blue-fill"
              title="Submit"
            ></Button>
          </div>
        </form>
      </div>
    </>
  );
}
