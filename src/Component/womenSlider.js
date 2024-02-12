import { NavLink } from "react-router-dom"

function WomenSlider(){
    return(
        <>
            <div className="row">
							<div className="womenFilterSlide">
								<div className="side border mb-1">
									<h3>Brand</h3>
									<ul>
										<li><NavLink href="#">Nike</NavLink></li>
										<li><NavLink href="#">Adidas</NavLink></li>
										<li><NavLink href="#">Merrel</NavLink></li>
										<li><NavLink href="#">Gucci</NavLink></li>
										<li><NavLink href="#">Skechers</NavLink></li>
									</ul>
								</div>
							</div>
							<div className="womenFilterSlide">
								<div className="side border mb-1">
									<h3>Size/Width</h3>
									<div className="block-26 mb-2">
										<h4>Size</h4>
					               <ul>
					                  <li><NavLink href="#">7</NavLink></li>
					                  <li><NavLink href="#">7.5</NavLink></li>
					                  <li><NavLink href="#">8</NavLink></li>
					                  <li><NavLink href="#">8.5</NavLink></li>
					                  <li><NavLink href="#">9</NavLink></li>
					                  <li><NavLink href="#">9.5</NavLink></li>
					                  <li><NavLink href="#">10</NavLink></li>
					                  <li><NavLink href="#">10.5</NavLink></li>
					                  <li><NavLink href="#">11</NavLink></li>
					                  <li><NavLink href="#">11.5</NavLink></li>
					                  <li><NavLink href="#">12</NavLink></li>
					                  <li><NavLink href="#">12.5</NavLink></li>
					                  <li><NavLink href="#">13</NavLink></li>
					                  <li><NavLink href="#">13.5</NavLink></li>
					                  <li><NavLink href="#">14</NavLink></li>
					               </ul>
					            </div>
					            <div className="block-26">
										<h4>Width</h4>
					               <ul>
					                  <li><NavLink href="#">M</NavLink></li>
					                  <li><NavLink href="#">W</NavLink></li>
					               </ul>
					            </div>
								</div>
							</div>
							<div className="womenFilterSlide">
								<div className="side border mb-1">
									<h3>Style</h3>
									<ul>
										<li><NavLink href="#">Slip Ons</NavLink></li>
										<li><NavLink href="#">Boots</NavLink></li>
										<li><NavLink href="#">Sandals</NavLink></li>
										<li><NavLink href="#">Lace Ups</NavLink></li>
										<li><NavLink href="#">Oxfords</NavLink></li>
									</ul>
								</div>
							</div>
							<div className="womenFilterSlide">
								<div className="side border mb-1">
									<h3>Colors</h3>
									<ul>
										<li><NavLink href="#">Black</NavLink></li>
										<li><NavLink href="#">White</NavLink></li>
										<li><NavLink href="#">Blue</NavLink></li>
										<li><NavLink href="#">Red</NavLink></li>
										<li><NavLink href="#">Green</NavLink></li>
										<li><NavLink href="#">Grey</NavLink></li>
										<li><NavLink href="#">Orange</NavLink></li>
										<li><NavLink href="#">Cream</NavLink></li>
										<li><NavLink href="#">Brown</NavLink></li>
									</ul>
								</div>
							</div>
							<div className="womenFilterSlide">
								<div className="side border mb-1">
									<h3>Material</h3>
									<ul>
										<li><NavLink href="#">Leather</NavLink></li>
										<li><NavLink href="#">Suede</NavLink></li>
									</ul>
								</div>
							</div>
							<div className="womenFilterSlide">
								<div className="side border mb-1">
									<h3>Technologies</h3>
									<ul>
										<li><NavLink href="#">BioBevel</NavLink></li>
										<li><NavLink href="#">Groove</NavLink></li>
										<li><NavLink href="#">FlexBevel</NavLink></li>
									</ul>
								</div>
							</div>
						</div>
        </>
    )
}

export default WomenSlider