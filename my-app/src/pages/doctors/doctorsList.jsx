import DoctorCard from "../../components/doctorCard";
import Select from "../../components/select";
import Input from "../../components/Input";
import { DoctorsData, Cities, Options } from "../../data/appData";
import { useState } from "react";

const DoctorList = () => {
  const gender = ["All", "Male", "Female"];  

  const [query, setQuery] = useState("");
  const [speciality, setSpeciality] = useState("All");
  const [cities, setCities] = useState("All");
  const [Gender, setGender] = useState("All");

  const handleSearchByName = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const filteredItems = DoctorsData
    .filter((doctor) => doctor.name.toLowerCase().includes(query))
    .filter((doctor) => speciality !== 'All' ? doctor.specialty.toLowerCase().includes(speciality) : true)
    .filter((doctor) => cities !== 'All' ? doctor.city.toLowerCase().includes(cities) : true)
    .filter((doctor) => Gender !== 'All' ? doctor.gender.toLowerCase() === Gender.toLowerCase() : true);  // Gender filter with case-insensitivity

  const handleCities = (e) => {
    setCities(e.target.value.toLowerCase());
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleSpeciality = (e) => {
    setSpeciality(e.target.value.toLowerCase());
  };

  

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse">
      {/* Main doctor cards section */}
      <section className="p-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-5 w-full lg:w-2/3">
        {filteredItems.map((doctor) => (
          <DoctorCard key={doctor.id} name={doctor.name} specialty={doctor.specialty} imageUrl={doctor.imageUrl} id={doctor.id} />
        ))}
        {filteredItems.length === 0 && query === "" && (
          <h3 className="text-center text-red-500 font-bold">Please apply filters to search doctors...</h3>
        )}
        {filteredItems.length === 0 && query !== "" && (
          <h3 className="text-center text-red-500 font-bold">No doctors found...</h3>
        )}
      </section>

      {/* Sticky form section */}
      <aside className="p-5 w-full lg:w-1/3 cursor-pointer relative ">
        <fieldset className="sticky top-5 z-10 md:ring-4 md:ring-primary-color py-0 md:py-2 w-fit md:w-full rounded flex items-center">
          <form className="flex md:flex-col overflow-x-scroll 
           md:overflow-auto p-3 gap-5 w-96 md:w-full" onSubmit={(e)=>e.preventDefault()}>
            <Input type="text" name="query" id="query" label="Doctor name" onChange={handleSearchByName} value={query} placeholder="Dr ..." />
            <Select label="specialty" name="specialty" id="specialty"  options={Options} onChange={handleSpeciality} />
            <Select label="City" name="cities" id="cities" options={Cities} onChange={handleCities} />
            <Select label="Gender" name="gender" id="gender"   options={gender} onChange={handleGender} />
          </form>
        </fieldset>
      </aside>
    </div>
  );
};

export default DoctorList;
