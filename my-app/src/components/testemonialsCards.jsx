import TestimonialsData from "../data/testimonialsData";
import PropTypes from "prop-types";
function Testimonials({limitedNumber}) {

  const limitedTestimonials = TestimonialsData.slice(0,limitedNumber)
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 cursor-zoom-in">
      {limitedTestimonials .map((t , i) => (
        <article key={i} className="p-6 w-full  shadow-lg rounded-lg hover:scale-105 duration-200">
          <div className="font-semibold flex gap-4 items-center">
            <figure className="w-16 h-16 bg-white rounded-full overflow-hidden">
              <img
                src={t.image_url}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <h3 className="text-sm">{t.name}</h3>
          </div>

          <div className="mt-4 text-gray-800">
            <q className="italic">{t.testimonial}</q>
          </div>
        </article>
      ))}
      
    </section>
  );
}


Testimonials.propTypes  = {
      limitedNumber: PropTypes.number.isRequired,  

};

export default Testimonials;
