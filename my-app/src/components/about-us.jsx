import { NavLink } from "react-router-dom";
const About = () => {
    return (
        <section className="p-5 md:p-10 grid grid-cols-1 lg:grid-cols-2 place-items-center  gap-10 my-10 bg-slate-50">
            <div>
                <figure>
                    <img src="https://doctorsa.com/wp-content/uploads/2023/02/doctorsa-doctor.jpg" alt="" />
                </figure>
            </div>
            <div className="">
                <h1 className="font-bold text-2xl md:text-4xl mb-3 text-primary-color">
                    Doctor On Demand is now part of Included Health
                </h1>
                <p className="text-justify leading-7">
                    Doctor On Demand is the trusted provider of 24/7 virtual healthcare
                    for the mind and body, including urgent care, mental health,
                    preventative, primary and chronic care, with access to board-certified
                    physicians and licensed psychologists through a smartphone, tablet, or
                    computer.
                </p>
                <p className="text-justify leading-7 mt-5">
                    Founded in 2013, our mission is to improve the world’s
                    health through compassionate care and innovation. We believe that
                    everyone should have instant and affordable access to a
                    board-certified doctor, whenever and wherever needed.{" "}
                </p>
                <NavLink
                    to="/doctorslist"
                    className="bg-primary-color text-white px-5 py-3 rounded hover:bg-secondary-color transition-all block  text-center mt-10 md:text-xl"
                >
                    Start now
                </NavLink>
            </div>

        </section>
    );
};

export default About