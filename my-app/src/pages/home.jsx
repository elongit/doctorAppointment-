
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Components

import ServiceCards from "../components/serviceCards";
import Testemonials from "../components/testemonialsCards";
import Btn from "../components/btn";

// Data
import data from "../data/servicesCardData";

// Assets
import serviceImage from "../../public/assets/ServiceImage-Photoroom.png";

const Home = () => {
  return (
    <>
   
      {/* hero section */}
      <section className="p-5">
        <div className="flex flex-col-reverse lg:grid grid-cols-1 pb-2 lg:p-0 lg:grid-cols-2 md:place-content-start lg:place-items-center   overflow-hidden gap-10 ">
         
          <div className="">
            <h1 className="text-black/75 text-xl m:text-2xl font-bold lg:text-5xl  ">
             <span className="md:block mb-2 "> Find & Book{" "}
            Appointment </span>
              with your Fav Doctor
            </h1>
            <p className=" md:text-2xl text-gray-700 mt-3 mb-5 lg:my-8">
              Find availability of all doctor and book an appointment. with one
              click{" "}
            </p>
               <Btn type='button' label="Explore now!" path="/doctorslist" />
            
          </div>
          <figure className="overflow-hidden cursor-zoom-in">
            <img
              src="https://doctor-appointment-booking-web-nextjs.vercel.app/doctors.jpg"
              alt=""
              className="rounded-md hover:scale-105 transition-all"
            />
          </figure>
        </div>
      </section>
    
      
      {/* Our Services */}
      <section className="p-5">
        <ServiceCards data={data} />
      </section>
      
      {/* Book Appointment Section */}
      <section className="p-5 bg-blue-50 grid md:grid-cols-1 lg:grid-cols-2 place-items-center gap-10 lg:gap-5">
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-black/60">
            Find a practitioner available today, even on Saturday with Doc
          </h1>
          <p className="my-5 text-gray-700">
            Need a consultation quickly? Book an appointment with a doctor,
            dentist, or therapist available the same day. In just a few clicks,
            find a healthcare professional near you or offering
            teleconsultations for quick access to care.
          </p>
          
          <Btn type="button" label="Book an appointment now!" path="/doctorsList" />
        </div>
        <figure className="w-72 lg:w-96 order-first lg:order-last bg-white">
          <img src={serviceImage} alt="Doctor service image" className="w-full" />
        </figure>
      </section>

      {/* Testimonials Section */}
      <section className="p-5 my-10">
        <h1 className="text-xl md:text-3xl font-bold mb-12 text-black/60">
          What our Patients say about us
        </h1>
        <Testemonials limitedNumber={3} />
        <div className="mt-3">
        <Btn type="button" label={ <FontAwesomeIcon icon={faArrowRight} />} path="/TestimonialPage  " />
        </div>
      </section>
    </>
  );
};

export default Home;
