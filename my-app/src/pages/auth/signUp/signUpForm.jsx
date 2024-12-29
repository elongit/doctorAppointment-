import { NavLink } from "react-router-dom";
import Input from "../../../components/Input";
import useSignUpFormLogic from "./signUpLogic";

const SignUp = () => {
  const { formData, err, handleSubmit, handleChange } = useSignUpFormLogic()
  return (
    <section className="my-24">
    <fieldset className="md:w-2/3 lg:w-2/4 m-auto p-4 mt-10   md:p-5 md:shadow-lg bg-white">
      <legend className="text-xl md:text-2xl font-bold text-primary-color drop-shadow">
        Create a new account
      </legend>
      <form className=" flex flex-col  gap-4" onSubmit={handleSubmit}>
        <Input
          label="Full name "
          type="text"
          name="fullName"
          id="fullName"
          className="border-2 bg-slate-100 border-white hover:border-blue-500 transition-all outline-none p-2 text-[18px]"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          error={err.fullName}
        />
        <Input
          label="Email "
          type="email"
          name="email"
          id="email"
          className="border-2 bg-slate-100 border-white hover:border-blue-500 transition-all outline-none p-2 text-[18px]"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={err.email}
        />
       
        <Input
          label="Username "
          type="text"
          name="username"
          id="username"
          className="border-2 bg-slate-100 border-white hover:border-blue-500 transition-all outline-none p-2 text-[18px]"
          placeholder="Choose a unique username"
          value={formData.username}
          onChange={handleChange}
          error={err.username}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          className="border-2 bg-slate-100 border-white hover:border-blue-500 transition-all outline-none p-2 text-[18px]"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          error={err.password}
          autoComplete="new-password"
        />

        <Input
          label="Confirm Password "
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="border-2 bg-slate-100 border-white hover:border-blue-500 transition-all outline-none p-2 text-[18px]"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={err.confirmPassword}
          autoComplete="new-password"
        />

        <button
          type="submit"
          className="bg-primary-color hover:bg-secondary-color text-white font-bold text-xl py-2 rounded-md"
        >
          Sign Up
        </button>
        <div className="cursor-pointer">
          <small>
            Already have an account? <NavLink to="/login">sign In</NavLink>{" "}
          </small>
        </div>
      </form>
    </fieldset>
    </section>
  );
};
export default SignUp;
