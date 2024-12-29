
// components
import Input from "../../components/Input";
import Btn from "../../components/btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function BookingForm() {
 

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <>
        <div className="p-2 md:p-5">
        <Btn type="button" label={ <FontAwesomeIcon icon={faArrowLeft} />} path="/doctorsList" />
        </div>
   
    <section className="my-5">
        
      <fieldset className="md:w-2/3 lg:w-2/4 m-auto p-4 md:p-5 md:shadow-lg bg-white">
        <legend className="text-xl md:text-2xl font-bold  text-gray-700">
          <small>
            {" "}
            Book an appointment with Dr{" "}
            <span className="text-primary-color drop-shadow ">
             
            </span>
          </small>
        </legend>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* full name*/}
          <Input
            label="Full Name"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your Full name"
            autocomplete="fullName"
          />
          {/* phone number*/}
          <Input
            label="Phone number"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+212 6 xxx xx xx"
            autocomplete="phoneNumber"
          />

            <label htmlFor="" className="text-lg font-medium text-gray-700">
              Please describe the reason for this visit
            </label>
            <textarea
              name=""
              id=""
              placeholder="I feel..."
              className="rounded p-2 bg-slate-100 border-white hover:border-blue-500 focus:outline-none focus:ring-4"
            ></textarea>
       
          {/* date */}
          <Input type="date" label="Pick a date" name="date" id="date" />
          {/* time */}
          <Input type="time" label="Pick a time" name="time" id="time" />
          <div className="cursor-pointer">
            <button
              type="submit"
              className="bg-primary-color hover:bg-secondary-color text-white font-bold text-xl py-2 rounded-md w-full"
             
            >
              Book
            </button>
          </div>
        </form>
      </fieldset>
    </section>
    </>
  );
}

export default BookingForm;
