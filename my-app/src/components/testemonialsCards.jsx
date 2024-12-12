import TestimonialsData from "../data/testimonialsData"; // Make sure your import name is correct (Testemonials => Testimonials)
function Testimonials() {
  const limitedTestimonials = TestimonialsData.slice(0,3)
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {limitedTestimonials .map((t) => (
        <article key={t.id} className="p-6 w-full  shadow-lg rounded-lg hover:scale-105 duration-200">
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

export default Testimonials;
