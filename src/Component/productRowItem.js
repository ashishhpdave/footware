import { NavLink } from "react-router-dom"

function ProductItem(productItemData){
    return(
        <>  
            <div className="col-lg-3 mb-4 text-center">
						<div className="product-entry border">
							<NavLink href="#" className="prod-img">
								<img src={productItemData.img} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
							</NavLink>
							<div className="">
								<h2><NavLink href="#">{productItemData.h2}</NavLink></h2>
								<span className="price">{productItemData.span}</span>
							</div>
						</div>
					</div>
        </>
    )
}

export default ProductItem