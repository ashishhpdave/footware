import { NavLink } from "react-router-dom"

function Header(page){
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
								<li className={page === 'Home' ? 'active' : 'active'}><NavLink to="/">Home</NavLink></li>
								<li className={page === '/' ? 'has-dropdown' : 'has-dropdown'}><NavLink to="/men">Men</NavLink></li>
								<li className={page === 'men' ? 'has-dropdown' : 'has-dropdown'}><NavLink to="/women">Women</NavLink></li>
								<li className={page === 'women' ? 'has-dropdown' : 'has-dropdown'}><NavLink to="/about">About</NavLink></li>
								<li className={page === 'about' ? 'has-dropdown' : 'has-dropdown'}><NavLink to="/contact">Contact</NavLink></li>
							
								
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