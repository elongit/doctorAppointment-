import { NavLink } from "react-router-dom"
const Btn = ({label , path , type})=>{

    return(
        <button type={type} className="bg-primary-color text-white px-5 py-3 rounded hover:bg-secondary-color transition-all md:text-xl">
            <NavLink to={path}>
                {label}
            </NavLink>
        </button>
    )
}

export default Btn