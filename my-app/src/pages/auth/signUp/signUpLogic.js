import { useState } from "react";

const useSignUpFormLogic = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [err, setErr] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const validationMsg = {
    fullNameValidation: "Full name is required",
    passwordLength: "Password should be at least 8 characters",
    passwordMatch: "Passwords do not match",
    emailValidation: "Invalid email address",
  };

  const handleFormErr = () => {
    let errors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.fullName) {
      errors.fullName = validationMsg.fullNameValidation;
    }

    if (!emailPattern.test(formData.email)) {
      errors.email = validationMsg.emailValidation;
    }

    if (formData.password.length < 8) {
      errors.password = validationMsg.passwordLength;
    }

    if (formData.password.trim() !== formData.confirmPassword.trim()) {
      errors.confirmPassword = validationMsg.passwordMatch;
    }

    if (Object.keys(errors).length > 0) {
      setErr(errors); // Set the error state
    } else {
      console.log(formData);
      console.log("Data submitted successfully");
      setErr({}); 
    }
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormErr(); 
  };

  return {
    handleSubmit,
    handleChange,
    formData,
    err,
  };
};

export default useSignUpFormLogic;
