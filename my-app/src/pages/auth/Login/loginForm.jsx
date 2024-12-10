import { NavLink } from "react-router-dom";
import Input from "../../../components/Input";
import useLoginFormLogic from "./loginLogic";

const Login = () => {

  const { formData, err, handleSubmit, handleChange } = useLoginFormLogic();

  return (
    <fieldset className="md:w-2/3 lg:w-2/4 m-auto mt-10 p-4 md:p-5 md:shadow-lg bg-white">
      <legend className="text-xl md:text-2xl font-bold text-primary-color drop-shadow">
        Patient log in{" "}
      </legend>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Username */}
        <Input
          label="Username"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          error={err.username}
        />

        {/* Password */}
        <Input
          label="Password"
          type="password" 
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={err.password}
          
        />

        <div className="cursor-pointer">
          <small>
            Forgot
            <NavLink to="/forgetPass"> password?</NavLink>
          </small>
        </div>

        <button
          type="submit"
          className="bg-primary-color hover:bg-secondary-color text-white font-bold text-xl py-2 rounded-md"
        >
          Login
        </button>

        <div className="cursor-pointer">
          <small>
            Already have an account?
            <NavLink to="/signUp">Sign up</NavLink>
          </small>
        </div>
      </form>
    </fieldset>
  );
};

export default Login;
