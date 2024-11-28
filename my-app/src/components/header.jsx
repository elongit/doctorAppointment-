import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex justify-between p-5 cursor-pointer bg-white ">
      <h1 className="font-bold text-3xl tracking-wider text-secondary-color">
        <NavLink to="/">
          {" "}
          Doct
          <span className="text-white bg-primary-color px-2 rounded-md">
            or
          </span>
        </NavLink>
      </h1>
      <nav className="">
        <ul className="flex gap-5 font-semibold text-[18px] text-black/75 items-center">
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Need help?</NavLink>
          </li>

          <li>
            <NavLink to="/doctorsList">Doctors?</NavLink>
          </li>

          <li className="bg-primary-color text-white px-4 py-2 rounded-md">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
