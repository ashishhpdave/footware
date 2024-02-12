import { NavLink } from "react-router-dom"
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
function Footer(){
    return(
        <>
            <footer id="colorlib-footer" role="contentinfo">
			<div class="container">
				<div class="row">
					<div class="col footer-col colorlib-widget">
						<h4>About Footwear</h4>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
						<p>
							<ul class="colorlib-social-icons">
								<li><NavLink href="https://github.com/ashishhpdave?tab=repositories"><i class=""><FaTwitter /></i></NavLink></li>
								<li><NavLink href="https://github.com/ashishhpdave?tab=repositories"><i class=""><FaFacebook /></i></NavLink></li>
								<li><NavLink href="https://github.com/ashishhpdave?tab=repositories"><i class=""><FaLinkedinIn /></i></NavLink></li>
								<li><NavLink href="https://github.com/ashishhpdave?tab=repositories"><i class=""><FaGithub /></i></NavLink></li>
							</ul>
						</p>
					</div>
					<div class="col footer-col colorlib-widget">
						<h4>Customer Care</h4>
						<p>
							<ul class="colorlib-footer-links">
								<li><NavLink href="#">Contact</NavLink></li>
								<li><NavLink href="#">Returns/Exchange</NavLink></li>
								<li><NavLink href="#">Gift Voucher</NavLink></li>
								<li><NavLink href="#">Wishlist</NavLink></li>
								<li><NavLink href="#">Special</NavLink></li>
								<li><NavLink href="#">Customer Services</NavLink></li>
								<li><NavLink href="#">Site maps</NavLink></li>
							</ul>
						</p>
					</div>
					<div class="col footer-col colorlib-widget">
						<h4>Information</h4>
						<p>
							<ul class="colorlib-footer-links">
								<li><NavLink href="#">About us</NavLink></li>
								<li><NavLink href="#">Delivery Information</NavLink></li>
								<li><NavLink href="#">Privacy Policy</NavLink></li>
								<li><NavLink href="#">Support</NavLink></li>
								<li><NavLink href="#">Order Tracking</NavLink></li>
							</ul>
						</p>
					</div>

					<div class="col footer-col">
						<h4>News</h4>
						<ul class="colorlib-footer-links">
							<li><NavLink href="blog.html">Blog</NavLink></li>
							<li><NavLink href="#">Press</NavLink></li>
							<li><NavLink href="#">Exhibitions</NavLink></li>
						</ul>
					</div>

					<div class="col footer-col">
						<h4>Contact Information</h4>
						<ul class="colorlib-footer-links">
							<li>291 South 21th Street, <br/> Suite 721 New York NY 10016</li>
							<li><NavLink href="Mo.//1234567920">+ 1235 2355 98</NavLink></li>
							<li><NavLink href="ashish@gmail.com">info@yoursite.com</NavLink></li>
							<li><NavLink href="https://github.com/ashishhpdave?tab=repositories">More Template</NavLink></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="copy">
				<div class="row">
					<div class="col-sm-12 text-center">
						<p>
							<span> Template is licensed under CC BY 3.0. 
Copyright &copy; All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true">ashishhpdave</i> More <NavLink href="https://github.com/ashishhpdave?tab=repositories" target="_blank">github</NavLink>
 </span> 
						</p>
					</div>
				</div>
			</div>
		</footer>
        </>
    )
}

export default Footer