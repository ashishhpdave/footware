import { NavLink } from "react-router-dom"

function ShoseCartData(mainCartshose) {
    return (
        <>
            <div className="col-sm-4 text-center">
                <div className="featured">
                    <div className="featured-img featured-img-2"  style={{backgroundImage: "url(images/men.jpg)"}}>
                        <h2>{mainCartshose.h2}</h2>
                        <p><NavLink href="#" className="btn btn-primary btn-lg">Shop now</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoseCartData