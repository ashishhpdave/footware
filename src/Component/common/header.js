import { NavLink } from "react-router-dom"

function Header(){
    return(
        <>
        <div>
        <nav className="colorlib-nav" role="navigation">
			<div className="top-menu">
				<div className="container">
					<div className="row">
						<div className="col-sm-7 col-md-9">
							<div id="colorlib-logo"><NavLink to="#">Footwear</NavLink></div>
						</div>
						<div className="col-sm-5 col-md-3">
			            <form action="#" className="search-wrap">
			               <div className="form-group">
			                  <input type="search" className="form-control search" placeholder="Search"/>
			                  <button className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search"></i></button>
			               </div>
			            </form>
			         </div>
		         </div>
					<div className="row">
						<div className="col-sm-12 text-left menu-1">
							<ul>
								<li className="active"><NavLink to="#">Home</NavLink></li>
								<li className="has-dropdown">
									<NavLink to="men.html">Men</NavLink>
									<ul className="dropdown">
										<li><NavLink to="product-detail.html">Product Detail</NavLink></li>
										<li><NavLink to="cart.html">Shopping Cart</NavLink></li>
										<li><NavLink to="checkout.html">Checkout</NavLink></li>
										<li><NavLink to="order-complete.html">Order Complete</NavLink></li>
										<li><NavLink to="add-to-wishlist.html">Wishlist</NavLink></li>
									</ul>
								</li>
								<li><NavLink to="women.html">Women</NavLink></li>
								<li><NavLink to="about.html">About</NavLink></li>
								<li><NavLink to="contact.html">Contact</NavLink></li>
								<li className="cart"><NavLink to="cart.html"><i className="icon-shopping-cart"></i> Cart [0]</NavLink></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="sale">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center">
							<div className="row">
								<div className="owl-carousel2">
									
									<div className="item">
										<div className="col">
											<h3><NavLink to="#">Our biggest sale yet 50% off all summer shoes</NavLink></h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
        </div>
        </>
    )
}

export default Header