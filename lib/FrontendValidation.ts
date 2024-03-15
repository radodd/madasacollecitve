// import { useState } from "react";

// export default function FrontendValidation() {
//   // State to manage form data and validation errors
//   const [formData, setFormData] = useState({
//     fullName: "",
//     // Add other form fields here
//   });

//   const [errors, setErrors] = useState({
//     fullName: "",
//     // Add other form fields here
//   });

//   // Function to handle input changes
//   const handleInputChange = (e: any) => {
//     const { name, value } = e.target;

//     // Perform validation and update state
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     // Check for numbers in the full name field and update errors
//     if (name === "fullName" && /\d/.test(value)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         fullName: "Full name should not contain numbers.",
//       }));
//     } else {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         fullName: "",
//       }));
//     }
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     // Validate form data before submission
//     if (!validateForm()) {
//       // Handle validation errors
//       alert("Form validation failed. Please check the errors.");
//       return;
//     }

//     // Your existing code for form submission...
//   };

//   // Function to validate the entire form
//   const validateForm = () => {
//     // Perform additional validation if needed
//     // For now, we are only checking the full name field
//     return !errors.fullName;
//   };
// }
