import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
    <header className="flex justify-between p-5 items-center cursor-pointer  ">
      <h1 className="font-bold text-2xl md:text-3xl tracking-wider text-secondary-color">
        <NavLink to="/">
          <span className="text-white bg-primary-color px-2 py-1 lg:py-0 rounded-md">
            Dr+
          </span>
        </NavLink>
      </h1>
      <nav>
        <ul className="list-none">
        {location.pathname === "/login" ? (
          <li className="bg-primary-color text-white px-4 py-2 rounded">
            <NavLink to="/signUp">Sign up</NavLink>
          </li>
        ) : (
          <li className="bg-primary-color text-white px-4 py-2 rounded">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
