import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function DoctorCard({ name, specialty, imageUrl }) {
  const navigate = useNavigate();
  const [islogged, setIslogged] = useState(false);

  const visitProfile = () => {
    if (islogged) {
      navigate("/");
    } else {
      navigate("/login",{state:{message:"Please login to book an apointment"},replace:true});
    }
  };
  return (
    <article className="text-[17px] h-fit hover:shadow-lg transition-all p-2 cursor-pointer">
      <figure className="rounded overflow-hidden cursor-zoom-in">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover rounded-md hover:scale-105 transition-all"
        ></img>
      </figure>
      <div className="p-2">
        <NavLink className="text-xl text-secondary-color font-semibold">
          Dr. {name}
        </NavLink>
        <p className="text-sm font-bold">{specialty}</p>
      </div>
      <div className="flex flex-col gap-1 text-center">
        <button
          onClick={visitProfile}
          className="bg-primary-color hover:bg-secondary-color text-white font-bold  py-2 rounded-md"
        >
          {" "}
          Book an appointment
        </button>
      </div>
    </article>
  );
}

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
