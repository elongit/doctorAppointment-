import { NavLink } from "react-router-dom";


const ForgetPassword = () => {
  return (
    <fieldset className="md:w-2/3 lg:w-2/4 m-auto mt-20 p-4  md:p-5 md:shadow-lg bg-white">
      <legend className="text-xl md:text-2xl font-bold text-primary-color drop-shadow">
      Step 1
      </legend>
      <form  className=" flex flex-col  gap-4">
        <label htmlFor="email" className="md:text-[17px] font-semibold">Email*</label>
        <input
          type="email"
          name="email"
          id="pass"
          placeholder="Entre your email"
            className="p-2 border-2 border-white hover:border-primary-color
             transition-all bg-slate-100 h-12 outline-none"
        />

        <button type="submit" className="bg-primary-color hover:bg-secondary-color text-white font-bold  py-2 rounded-md">
        Send password reset code
        </button>

        <div className="cursor-pointer">
            <small>
                <NavLink to='/login'> Go back? </NavLink> 
            </small>
        </div>
     
      </form>
    </fieldset>
  );
};
export default ForgetPassword 