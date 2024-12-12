import { useState , useEffect } from "react";
import { useNavigate ,useLocation} from "react-router-dom";


const useLoginFormLogic = () => {
  const {state} = useLocation()
  const [msg , setMsg] = useState()
  const message = state?.message || null
 
  useEffect(()=>{
    if(message){
      setMsg(message)
    }
    setTimeout(() => {
      setMsg('')
    }, 5000);
  },[message])

  
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "", 
    password: "",
  });

  const [err, setFormErr] = useState({
    username: "",
    password: "",
  });

  const validationMsg = {
    required: "This field is required.",
    loginValidationErr: "Email or password are incorrect",
  };

  const handleFormValidation = () => {
    const errors = {};
    if (!formData.username.trim()) errors.username = validationMsg.required;
    if (!formData.password.trim()) errors.password = validationMsg.required;
    if(formData.username === 'oussama' && formData.password === '1234'){
        navigate('/doctorsList')
    }

    if (Object.keys(errors).length > 0) {
      setFormErr(errors);
      return false; 
    } else {
      setFormErr({});
      return true; 
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
    const isValid = handleFormValidation();
    if (isValid) {
      console.log("Form submitted", formData);
      
    }
  };

  return {
    formData,
    err,
    handleSubmit,
    handleChange,
    msg
  };
};

export default useLoginFormLogic;
