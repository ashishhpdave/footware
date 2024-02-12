import { NavLink } from "react-router-dom"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
function ContactInformastion(){
    return(
        <>
            <div className="informastionMain">
					<div className="col-sm-12">
						<h3>Contact Information</h3>
						<div className="row contact-info-wrap">
							<div className="col-md-3">
								<p><span><i className=""><FaLocationDot /></i></span> 198 West 21th Street, <br/> Suite 721 New York NY 10016</p>
							</div>
							<div className="col-md-3">
								<p><span><i className=""><FaPhone /></i></span> <NavLink href="tel://1234567920">+ 1235 2355 98</NavLink></p>
							</div>
							<div className="col-md-3">
								<p><span><i className=""><FaPaperPlane /></i></span> <NavLink href="mailto:info@yoursite.com">info@yoursite.com</NavLink></p>
							</div>
							<div className="col-md-3">
								<p><span><i className=""><FiGlobe /></i></span> <NavLink href="#">yoursite.com</NavLink></p>
							</div>
						</div>
					</div>
				</div>
        </>
    )
}

export default ContactInformastion