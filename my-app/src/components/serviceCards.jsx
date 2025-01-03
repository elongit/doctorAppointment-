import PropTypes from "prop-types";

const ServiceCards = ({ data }) => {
  const cards = data.map((d) => (
    <div
      key={d.id}
      className="font-serif cursor-pointer p-6 hover:shadow-lg shadow flex-shrink-0 basis-80 rounded h-72 hover:scale-105 grid grid-cols-1 place-items-center lg:place-items-start text-center lg:text-start duration-200"
    >
      <figure>
        <img src={d.img} alt={d.Title} className="w-20 rounded" />
      </figure>
      <h1 className="text-2xl my-4 hover:text-primary-color">{d.Title}</h1>
      <p className="text-[18px] text-gray-700">{d.desc}</p>
    </div>
  ));

  return (
    <>
      <div className="">
        <h1 className="text-xl md:text-3xl font-bold lg:text-3xl text-center text-black/75 ">
          Our Included <span className="text-primary-color">Services</span>
        </h1>
      </div>

      <div className="px-0 py-5 lg:px-5 flex overflow-x-auto gap-4 mt-10 cardSection">
        {cards}
      </div>
    </>
  );
};

// Prop types validation
ServiceCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,   
      img: PropTypes.string.isRequired,  
      Title: PropTypes.string.isRequired, 
      desc: PropTypes.string.isRequired 
    })
  ).isRequired
};

export default ServiceCards;
