import { NavLink } from "react-router-dom"

function MenHeroBar(item){
	const {title} = item
    return(
        <>
            <div className="breadcrumbs-two">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="breadcrumbs-img"  style={{backgroundImage: "url(images/cover-img-1.jpg)"}}>
							<h2>{title}</h2>
						</div>
						<div className="menu text-center">
							<p><NavLink href="#">New Arrivals</NavLink> <NavLink href="#">Best Sellers</NavLink> <NavLink href="#">Extended Widths</NavLink> <NavLink href="#">Sale</NavLink></p>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    )
}

export default MenHeroBar