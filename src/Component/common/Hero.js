import { NavLink } from "react-router-dom"

function Hero(){
    return(
        <>
        	<aside id="colorlib-hero">
			<div className="flexslider">
				<ul className="slides">
                <div className="footimage" style={{backgroundImage: "url(images/img_bg_1.jpg)"}}> 
			   		<div className="overlay"></div>
			   		<div className="container-fluid">
			   			<div className="row">
				   			<div className="col-sm-6 offset-sm-3 text-center slider-text">
				   				<div className="slider-text-inner">
				   					<div className="desc">
					   					<h1 className="head-1">Men's</h1>
					   					<h2 className="head-2">Shoes</h2>
					   					<h2 className="head-3">Collection</h2>
					   					<p className="category"><span>New trending shoes</span></p>
					   					<p><NavLink to="#" className="btn btn-primary">Shop Collection</NavLink></p>
				   					</div>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</div>
			   
			  	</ul>
		  	</div>
		</aside>
        </>
    )
}

export default Hero