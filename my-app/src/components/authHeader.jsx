import { NavLink, useLocation } from "react-router-dom";

const AuthHeader = () => {
  const location = useLocation();
  return (
    <header className="flex justify-between p-2 md:p-5 cursor-pointer ">
      <h1 className="font-bold text-xl md:text-3xl tracking-wider text-secondary-color  p-2 rounded ">
        <NavLink to="/">
          {" "}
          Doct<span className=" bg-primary-color px-2 text-white rounded">or</span>
        </NavLink>
      </h1>

      <nav>
        {location.pathname === "/login" ? (
          <li className="bg-primary-color text-white px-4 py-2 rounded">
            <NavLink to="/signUp">Sign up</NavLink>
          </li>
        ) : (
          <li className="bg-primary-color text-white px-4 py-2 rounded">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </nav>
    </header>
  );
};

export default AuthHeader;
