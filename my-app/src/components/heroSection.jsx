import { NavLink } from "react-router-dom";
const HeroSection = ()=>{

    return(
        <section className="p-5">
        <div className="flex flex-col-reverse lg:grid grid-cols-1 pb-2 lg:p-0 lg:grid-cols-2 md:place-content-start lg:place-items-center    mt-5 overflow-hidden gap-10 ">
         
          <div className="">
            <h1 className="text-black text-2xl md:text-2xl font-bold lg:text-5xl">
              Find & Book{" "}
              <span className="text-primary-color ">Appointment </span>
              with your Fav <span className="text-primary-color">Doctor</span>
            </h1>
            <p className=" md:text-2xl text-gray-700 my-5 lg:my-8">
              Find availability of all doctor and book an appointment. with one
              click{" "}
            </p>
            <NavLink
              to="/doctorslist"
              className="bg-primary-color text-white px-5 py-3 rounded hover:bg-secondary-color transition-all md:text-xl"
            >
              Explore now
            </NavLink>
          </div>
          <figure className="">
            <img
              src="https://doctor-appointment-booking-web-nextjs.vercel.app/doctors.jpg"
              alt=""
              className="rounded-md"
            />
          </figure>
        </div>
      </section>
    
    )
}
export default HeroSection