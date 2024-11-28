import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <fieldset className="lg:w-2/4 m-auto mt-10 p-2 md:p-5 md:shadow-lg bg-white">
      <legend className="text-2xl font-bold text-primary-color drop-shadow">Create new account</legend>
      <form  className=" flex flex-col  gap-4">
      <label htmlFor="fname" className="text-[17px] font-semibold ">Full name*</label>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="Entre your username"
          className="p-2 border-2 border-white hover:border-primary-color transition-all bg-slate-100 h-12 
          outline-none "
        />

        <label htmlFor="username" className="text-[17px] font-semibold">Username*</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Entre your username"
          className="p-2 border-2 border-white hover:border-primary-color transition-all bg-slate-100 h-12 
          outline-none "
        />

        <label label htmlFor="email" className="text-[17px] font-semibold">Email*</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Entre your email"
          className="p-2 border-2 border-white hover:border-primary-color transition-all bg-slate-100 h-12 
          outline-none "
        />

        <label htmlFor="pass" className="text-[17px] font-semibold">Password*</label>
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Entre your password"
            className="p-2 border-2 border-white hover:border-primary-color
             transition-all bg-slate-100 h-12 outline-none"
        />

        <label htmlFor="Cpass" className="text-[17px] font-semibold">Confirme Password*</label>
        <input
          type="password"
          name="Cpass"
          id="Cpass"
          placeholder="Confirme your password"
            className="p-2 border-2 border-white hover:border-primary-color
             transition-all bg-slate-100 h-12 outline-none"
        />

        <button type="submit" className="bg-primary-color hover:bg-secondary-color text-white font-bold text-xl py-2 rounded-md">
          Sign Up
        </button>
        <div className="cursor-pointer">
            <small>Already have an account? <NavLink to='/login'>sign In</NavLink> </small>
        </div>
      </form>
    </fieldset>
  );
};
export default  SignUp 