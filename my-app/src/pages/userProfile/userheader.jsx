import { NavLink ,  useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState , useEffect } from "react";

const UserHeader = () => {
  const location = useLocation();
 
  useEffect(()=>{
    setIsOpen(false)
  }, [location])
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <header className="flex justify-between p-5 cursor-pointer bg-white relative ">
      <h1 className="font-bold text-2xl md:text-3xl tracking-wider text-secondary-color">
        <NavLink to="/">
        
         
        <span className="text-white bg-primary-color px-2 py-1 rounded-md"> 
          Dr+ 
          </span>
       
        </NavLink>
      </h1>
      <nav className={`bg-blue-50 py-10  lg:py-0 lg:bg-transparent absolute lg:static  w-full lg:w-fit ${isOpen ? 'left-0' : '-left-full'} top-full  p-5 lg:p-0 z-50 transition-all `}>
        <ul className="flex flex-col lg:flex-row gap-5 font-semiboldlg:text-[18px] font-semibold text-black/75 items-center">

          <li>
            <NavLink to="/contact">Need help?</NavLink>
          </li>

          <li>
            <NavLink to="/doctorsList">Doctors</NavLink>
          </li>

          <li>
            <NavLink to="/doctorsList"> Profile</NavLink>
          </li>

        </ul>
      </nav>
      <label htmlFor="" className="text-3xl font-bold lg:hidden" onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </label>
    </header>
   
  );
};

export default UserHeader;
