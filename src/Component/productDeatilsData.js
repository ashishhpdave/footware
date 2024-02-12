import { NavLink } from "react-router-dom"

function ProductDeatilsMainData(processData) {
    return (
        <>
            <div className="one-forth">
                <img src={processData.img} className=" product-img" alt="Free html5 bootstrap 4 template"/>
                <div className="display-tc">
                    <h3>{processData.h3}</h3>
                </div>
            </div>
            <div className="one-eight text-center">
                <div className="display-tc">
                    <span className="price">{processData.span}</span>
                </div>
            </div>
            <div className="one-eight text-center">
                <div className="display-tc">
                    <input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100" />
                </div>
            </div>
            <div className="one-eight text-center">
                <div className="display-tc">
                    <span className="price">{processData.span}</span>
                </div>
            </div>
            <div className="one-eight text-center">
                <div className="display-tc">
                    <NavLink href="#" className="closed"></NavLink>
                </div>
            </div>
        </>
    )
}

export default ProductDeatilsMainData