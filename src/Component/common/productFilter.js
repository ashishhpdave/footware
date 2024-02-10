import { NavLink } from "react-router-dom"

function ProductFilter(){
    return(
        <>
            <div className="colorlib-product">
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-6 text-center">
						<div className="featured">
							<NavLink href="#" className="featured-img" style={{backgroundImage: "url(images/men.jpg)"}}></NavLink>
							<div className="producttext">
								<h2><NavLink href="#">Shop Men's Collection</NavLink></h2>
							</div>
						</div>
					</div>
					<div className="col-sm-6 text-center">
						<div className="featured">
							<NavLink href="#" className="featured-img" style={{backgroundImage: "url(images/women.jpg)"}}></NavLink>
							<div className="producttext">
								<h2><NavLink href="#">Shop Women's Collection</NavLink></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    )
}

export default ProductFilter