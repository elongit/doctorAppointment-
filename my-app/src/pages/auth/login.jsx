import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <fieldset className="md:w-2/3 lg:w-2/4 m-auto mt-10 p-4  md:p-5 md:shadow-lg bg-white">
      <legend className="text-xl md:text-2xl font-bold text-primary-color drop-shadow">
      Patient log in </legend>
      <form  className=" flex flex-col  gap-4">
        <label htmlFor="username" className="text-sm md:text-[17px] font-semibold">Username*</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Entre your username"
          className="p-2 border-2 border-white hover:border-primary-color transition-all bg-slate-100 h-12 
          outline-none "
        />

        <label htmlFor="pass" className="text-sm md:text-[17px] font-semibold">Password*</label>
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Entre your password"
            className="p-2 border-2 border-white hover:border-primary-color
             transition-all bg-slate-100 h-12 outline-none"
        />
         <div className="cursor-pointer">
            <small>Forget 
                <NavLink to='/forgetPass'> password? </NavLink> 
            </small>
        </div>

        <button type="submit" className="bg-primary-color hover:bg-secondary-color text-white font-bold text-xl py-2 rounded-md">Login</button>
        <div className="cursor-pointer">
            <small>Already have an account? 
                <NavLink to='/signUp'>sign up</NavLink> 
            </small>
        </div>
      </form>
    </fieldset>
  );
};
export default Login