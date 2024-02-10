import { NavLink } from "react-router-dom"

function Breadcrumbs(){
    return(
        <>
            <div className="breadcrumbs">
			<div className="container">
				<div className="row">
					<div className="col">
						<p className="bread"><span><NavLink to="/">Home</NavLink></span> / <span>Men</span></p>
					</div>
				</div>
			</div>
		</div>
        </>
    )
}

export default Breadcrumbs