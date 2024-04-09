"use client";

import { motion } from "framer-motion";
import { sendEmail } from "@/actions/SendEmail";
import Button from "@/components/Button";
import Image from "next/image";
import styles from "./contact.module.scss";
import { useNav } from "@/context/NavContext";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import Plane from "@/public/Plane.json";

// const isInvalidFullName = (fullName: string) => {
//   const fullNameFormat = /\d/;
//   return fullNameFormat.test(fullName) && fullName.length > 0;
// };

// const isNumericInput = (event: any) => {
//   const key = event.keyCode;
//   return (
//     (key >= 48 && key <= 57) || // Allow number line
//     (key >= 96 && key <= 105) // Allow number pad
//   );
// };

// const isModifierKey = (event: any) => {
//   const key = event.keyCode;
//   return (
//     event.shiftKey === true ||
//     key === 35 ||
//     key === 36 || // Allow Shift, Home, End
//     key === 8 ||
//     key === 9 ||
//     key === 13 ||
//     key === 46 || // Allow Backspace, Tab, Enter, Delete
//     (key > 36 && key < 41) || // Allow left, up, right, down
//     // Allow Ctrl/Command + A,C,V,X,Z
//     ((event.ctrlKey === true || event.metaKey === true) &&
//       (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
//   );
// };

// const enforceFormat = (event: any) => {
//   // Input must be of a valid number format or a modifier key, and not longer than ten digits
//   if (!isNumericInput(event) && !isModifierKey(event)) {
//     event.preventDefault();
//   }
// };

// const formatToPhone = (event: any) => {
//   if (isModifierKey(event)) {
//     return;
//   }

//   const input = event.target.value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
//   const areaCode = input.substring(0, 3);
//   const middle = input.substring(3, 6);
//   const last = input.substring(6, 10);

//   if (input.length > 6) {
//     event.target.value = `(${areaCode}) ${middle} - ${last}`;
//   } else if (input.length > 3) {
//     event.target.value = `(${areaCode}) ${middle}`;
//   } else if (input.length > 0) {
//     event.target.value = `(${areaCode}`;
//   }
// };

// console.log("valid", isInvalidFullName("John Doe")); // false
// console.log(isInvalidFullName("John Doe1")); // t

export default function ContactForm() {
  const isTablet = useMediaQuery("(min-width: 401px) and (max-width: 835px)");
  const isMobile = useMediaQuery("(max-width: 400px)");
  const { isActive } = useNav();
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  // const [submitClickedFullName, setSubmitClickedFullName] = useState(false);
  // const [submitClickedPhoneNumber, setSubmitClickedPhoneNumber] =
  //   useState(false);
  // const isErrorFullName = isInvalidFullName(fullName) && submitClickedFullName;

  const onChangeFullName = (e: any) => {
    setFullName(e.target.value);
  };
  const onChangeCompany = (e: any) => {
    setCompany(e.target.value);
  };
  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const onChangePhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  const onChangeMessage = (e: any) => {
    setMessage(e.target.value);
  };

  // const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputPhoneNumber = e.target.value; // Get the raw input value from the event
  //   const formattedPhoneNumber = formatToPhone(inputPhoneNumber); // Format the phone number
  //   // setPhoneNumber(formattedPhoneNumber); // Update the state variable with the formatted phone number
  // };

  // const onSubmit = async (fullName: string) => {
  //   if (fullName === "") {
  //     console.log("ERRRRRROORRR");
  //   } else {
  //     console.log("Full name before clearing:", fullName);
  //     // Clear the full name input after successful submission
  //     setFullName("");
  //     console.log("Full name after clearing:", fullName);
  //   }
  // };

  // useEffect(() => {
  //   const inputElement = document.getElementById("phoneNumber");
  //   if (inputElement) {
  //     inputElement.addEventListener("keydown", enforceFormat);
  //     inputElement.addEventListener("keyup", formatToPhone);
  //   }
  // }, []); // Empty dependency a

  // useEffect(() => {}, []);

  return (
    // <motion.section
    //   id="contact"
    //   className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    //   initial={{
    //     opacity: 0,
    //   }}
    //   whileInView={{
    //     opacity: 1,
    //   }}
    //   transition={{
    //     duration: 1,
    //   }}
    //   viewport={{
    //     once: true,
    //   }}
    // >
    <div
      className={`${
        isActive ? "blur" : ""
      }  flex flex-col justify-center items-center bg-base overflow-hidden
    `}
    >
      <div
        className="z-10 flex justify-center items-center pt-14 pb-[90px] 
        max-[599px]:pb-[50px]
      max-tablet:pt-8
      max-mobile:pb-8
      max-mobile:pt-8"
      >
        <h1 className="text-hero font-bold max-mobileplus:text-5xl">
          Get in touch!
        </h1>
      </div>
      {/* {!isTablet && (
        <Image
          src="/contact_desktop.png"
          alt="circle"
          height={1448}
          width={2158}
          style={{
            width: "100%",
            height: "100%",
          }}
          className="absolute
        max-h-[880px]
        translate-y-[235px]"
        />
      )}
      {isTablet && !isMobile && (
        <Image
          src="/contact_tablet.png"
          alt="circle"
          height={1448}
          width={2158}
          style={{
            width: "100%",
            height: "100%",
          }}
          className="absolute
        max-h-[750px]
        translate-y-[100px]"
        />
      )}
      {isMobile && !isTablet && (
        <Image
          src="/contact_tablet.png"
          alt="circle"
          height={1448}
          width={2158}
          style={{
            width: "100%",
            height: "100%",
          }}
          className="absolute
        max-h-[840px]
        translate-y-[35px]
        "
        />
      )} */}

      <div
        className="bg-primary  w-full  flex justify-center pt-[40px]
"
      >
        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully!");
            setFullName("");
            setCompany("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");
          }}
          id="loginform"
          className={`${styles.form} z-10 flex max-w-[1200px] gap-8 mx-[100px] tablet:grid tablet:grid-cols-2 justify-center max-tablet:flex 
        max-tablet:flex-col
        max-tablet:mx-8`}
        >
          <div className={`${styles.animateLabel} flex flex-col`}>
            <input
              type="text"
              // id="fullName"
              name="fullName"
              value={fullName}
              onChange={onChangeFullName}
              className={`${styles.input} h-[57px] px-4 rounded-md `}
              autoComplete="off"
              required
              // style={{
              //   borderColor: isErrorFullName ? "red" : "#ccc", // Adjust colors as needed

              //   color: isErrorFullName ? "red" : "black", // Adjust text color based on error state
              // }}
            />
            <label className="text-md px-4">Full name *</label>
          </div>
          <div className={`${styles.animateLabel} flex flex-col`}>
            <input
              type="text"
              name="company"
              value={company}
              onChange={onChangeCompany}
              className={`${styles.input} h-[57px] px-4  rounded-md `}
              autoComplete="off"
              required
            />
            <label className="text-md px-4">Your company</label>
          </div>
          <div className={`${styles.animateLabel} flex flex-col`}>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onChangeEmail}
              className={`${styles.input} h-[57px] px-4 rounded-md `}
              autoComplete="off"
              required
            />
            <label className="text-md px-4">Your email *</label>
          </div>
          <div className={`${styles.animateLabel} flex flex-col`}>
            <input
              type="number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onChangePhoneNumber}
              className={`${styles.input} h-[57px] px-4  rounded-md `}
              autoComplete="off"
              required
            />
            <label className="text-md px-4">Phone number</label>
          </div>
          <div className={`${styles.animateLabelMessage} col-span-2`}>
            <textarea
              name="message"
              value={message}
              onChange={onChangeMessage}
              className={`${styles.input}  px-4 rounded-md`}
              autoComplete="off"
              required
            />
            <label className="text-md px-4 col-span-2">Message</label>
          </div>
          <div
            className="flex justify-end items-center col-span-2 pb-[61px] 
        max-tablet:pb-[206px]
        max-[599px]:pb-[56px]"
          >
            <Button
              // onClick={() => onSubmit}
              type="submit"
              variant="btn-blue-fill"
              title="Submit"
            >
              {/* <>
                {" "}
                <Lottie
                  animationData={Plane}
                  style={{ width: 100, height: 100 }}
                />
              </> */}
            </Button>
          </div>
        </form>
      </div>
    </div>
    // </motion.section>
  );
}
{
  /* <form
        className="z-10 extrasmall:grid extrasmall:grid-cols-2 justify-center gap-10 mx-[70px] max-w-[700px] 
        max-tablet:gap-6 
        max-tablet:flex 
        max-tablet:flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            alert(error);
            return;
          }
          alert("Email sent successfully!");
        }}
      >
        <div className="flex flex-col">
          <label className="text-md font-bold text-white">Your name:</label>
          <input
            className="h-[57px] px-4 mt-3 rounded-lg "
            name="name"
            id="name"
            type="text"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md font-bold text-white">Your company:</label>
          <input
            className="h-[57px] px-4 mt-3 rounded-lg "
            name="company"
            type="text"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md font-bold text-white">Your email:</label>
          <input
            className="h-[57px] px-4 mt-3 rounded-lg "
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <label className="text-md font-bold text-white">
            Your phone number:
          </label>
          <input
            className="h-[57px] px-4 mt-3 rounded-lg "
            name="phoneNumber"
            type="number"
            required
            maxLength={500}
            placeholder=""
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="text-md font-bold text-white">Message:</label>
          <textarea
            className="h-[350px] mt-3 rounded-lg p-4 "
            name="message"
            placeholder="Start typing here..."
            required
            maxLength={5000}
          />
        </div>
        <div
          className="flex justify-center items-center col-span-2 pb-10 
        max-tablet:pb-8"
        >
          <Button type="submit" variant="btn-blue-white" title="Submit" />
        </div>
      </form> */
}
