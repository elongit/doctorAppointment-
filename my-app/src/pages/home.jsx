import HeroSection from "../components/heroSection";
import Card from "../components/card";
import ServiceCards from "../components/serviceCards";
import data from "./data/servicesCardData";
import About from "../components/about-us";
const Home = () => {
  const doctors = [
    {
      name: "Fatima Zahra",
      specialty: "Dermatology",
      imageUrl:
        "https://img.freepik.com/photos-gratuite/heureux-jeune-femme-medecin-portant-robe-medicale-stethoscope-autour-du-cou-debout-posture-fermee_409827-254.jpg",
    },
    {
      name: "Ahmed Benali",
      specialty: "Neurology",
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_640.png",
    },
    {
      name: "Meriem El Amrani",
      specialty: "Pediatrics",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg",
    },
    {
      name: "Mohamed El Fassi",
      specialty: "Orthopedics",
      imageUrl:
        "https://static.vecteezy.com/ti/photos-gratuite/t1/28287555-un-indien-jeune-femelle-medecin-isole-sur-vert-ai-genere-photo.jpg",
    },
  ];

  return (
    <>
      <HeroSection />
      {/* our services */}

      <ServiceCards data={data} />

      <About />

      {/* search section */}
      <section className="p-5  md:p-10 flex-col">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Book your next <br />
            <span className="text-primary-color"> healthcare appointment</span>
          </h1>
          <p className="md:text-xl my-5 text-black/50 font-bold">
            Find, book and add your favourite practitioners to your care team.
          </p>
        </div>
        <form className="m-auto flex flex-col gap-3 md:gap-0 md:flex-row w-full lg:w-2/5">
          <input
            type="search"
            name="specialty"
            id="specialty"
            className="border-r-2 p-3 outline-none rounded-s-md w-full bg-slate-100 border-2 border-white hover:border-secondary-color"
            placeholder="specialty"
          />
          <input
            type="search"
            name="location"
            id="location"
            className="border-r-2 p-3 outline-none rounded-s-md w-full bg-slate-100 border-2 border-white hover:border-secondary-color"
            placeholder="location"
          />

          <button
            type="button"
            className="bg-primary-color text-white px-4 py-2 text-center text-xl font-bold rounded-e-md"
          >
            Search
          </button>
        </form>
      </section>

      {/* popular doctors section */}
      <h1 className="text-3xl font-semibold pl-5 mt-5 text-primary-color">Popular Doctors</h1>
      {/* Main doctor cards section */}
      <section className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 w-full ">
        {doctors.map((doctor, index) => (
          <Card
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            imageUrl={doctor.imageUrl}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
