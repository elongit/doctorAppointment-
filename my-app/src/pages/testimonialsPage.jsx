
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// components
import Btn from "../components/btn";
import Testimonials from "../components/testemonialsCards"

const TestimonialPage = ()=>{

    return(
       <section className="p-5">
        <div className="mb-5">
        <Btn type="button" label={ <FontAwesomeIcon icon={faArrowLeft} />} path="/" />
        </div>
         <Testimonials limitedNumber={-1}/>
       </section>
    )
}

export default TestimonialPage