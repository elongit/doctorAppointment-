import { NavLink } from "react-router-dom"
import PropTypes from "prop-types";

const Btn = ({label , path , type})=>{

    return(
        <button type={type} className="bg-primary-color text-white px-5 py-3 rounded hover:bg-secondary-color transition-all md:text-xl">
            <NavLink to={path}>
                {label}
            </NavLink>
        </button>
    )
}


Btn.propTypes = {
    label : PropTypes.node.isRequired, // node here validate anything including react elemnt
    path : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired

} 
export default Btn