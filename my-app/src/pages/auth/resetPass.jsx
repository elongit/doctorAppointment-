

const ResetPassword = () => {
  return (
    <fieldset className="md:w-2/3 lg:w-2/4 m-auto mt-20 p-4  md:p-5 md:shadow-lg bg-white">
      <legend className="text-xl md:text-2xl font-bold text-primary-color drop-shadow">Step 3</legend>
      <form  className=" flex flex-col  gap-4">
        

        <label htmlFor="pass" className="md:text-[17px] font-semibold">New Password*</label>
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Entre your password"
            className="p-2 border-2 border-white hover:border-primary-color
             transition-all bg-slate-100 h-12 outline-none"
        />
        
        <label htmlFor="Cpass" className="md:text-[17px] font-semibold">Confirm Password*</label>
        <input
          type="password"
          name="Cpass"
          id="Cpass"
          placeholder="Entre your password"
            className="p-2 border-2 border-white hover:border-primary-color
             transition-all bg-slate-100 h-12 outline-none"
        />

        <button type="submit" className="bg-primary-color hover:bg-secondary-color text-white font-bold text-xl py-2 rounded-md">
            Reset password
            </button>
       
       
      </form>
    </fieldset>
  );
};
export default ResetPassword 