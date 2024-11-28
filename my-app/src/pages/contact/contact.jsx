

const Contact = () => {
  return (
    <fieldset className="lg:w-2/4 m-auto mt-10 p-4  md:p-10 md:shadow-md bg-white rounded">
      <legend className="text-xl md:text-2xl font-bold text-primary-color drop-shadow">Tell us your problem </legend>
      <form  className=" flex flex-col  gap-4">
        <label htmlFor="username" className="text-[17px] font-semibold">Full name*</label>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="Entre your full name"
          className="p-2 border-2 border-white hover:border-primary-color transition-all bg-slate-100 h-12 
          outline-none "
        />

        <label htmlFor="sbj" className="text-[17px] font-semibold">subject*</label>
        <input
          type="text"
          name="sbj"
          id="sbj"
          placeholder="Entre your subject"
            className="p-2 border-2 border-white hover:border-primary-color
             transition-all bg-slate-100 h-12 outline-none"
        />

        <label htmlFor="sbj" className="text-[17px] font-semibold">Phone number*</label>
        <input
          type="tel"
          name="PhoneNum"
          id="PhoneNum"
          placeholder="Entre your phone number"
            className="p-2 border-2 border-white hover:border-primary-color
             transition-all bg-slate-100 h-12 outline-none"
        />

        <label htmlFor="msg" className="text-[17px] font-semibold">Your message*</label>
        
        <textarea 
            name="msg" id="msg" 
            placeholder="Entre your message"
            className="p-2 border-2 border-white hover:border-primary-color
            transition-all bg-slate-100 h-24 outline-none"
          

        ></textarea>



        <button type="submit" className="bg-primary-color hover:bg-secondary-color text-white font-bold text-xl rounded-md py-2">Send your message</button>

      </form>
    </fieldset>
  );
}; 
export default Contact