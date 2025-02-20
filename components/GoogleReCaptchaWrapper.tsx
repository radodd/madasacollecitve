"use client";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function GoogleReCaptchaWrapper() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleVerify = (token: string | null) => {
    if (token) {
      console.log("Verified Token", token);
    }
  };

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} // Ensure this is v2
      size="invisible" // Change to "normal" for a checkbox reCAPTCHA
      onChange={handleVerify}
    />
  );
}
