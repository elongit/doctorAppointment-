const ServiceCards = ({ data }) => {
  const cards = data.map((d) => (
    <div
      key={d.id}
      className="font-serif p-6 bg-white hover:shadow-lg flex-shrink-0 basis-80 rounded  h-fit grid grid-cols-1 place-items-center shadow-inner lg:place-items-start text-center lg:text-start  transition-shadow duration-300"
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
      <div className="my-10 ">
        <h1 className="text-3xl font-bold lg:text-3xl text-center">
          Our Included <span className="text-primary-color">Services</span>
        </h1>
      </div>

      <div className="cursor-pointer px-5 lg:px-5 flex  overflow-x-auto gap-4 pb-14 mt-10 cardSection">
        {cards}
      </div>
    </>
  );
};

export default ServiceCards;
