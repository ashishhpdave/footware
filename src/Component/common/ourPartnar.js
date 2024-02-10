import PartnerMainData from "../partnarItem"

const partnerData =[
    {
        img : "images/brand-1.jpg"
    },
    {
        img : "images/brand-2.jpg"
    },
    {
        img : "images/brand-3.jpg"
    },
    {
        img : "images/brand-4.jpg"
    },
    {
        img : "images/brand-5.jpg"
    },
    
    
]

function OurPartner(){
    return(
        <>
            <div className="colorlib-partner">
			<div className="container">
				<div className="row">
					<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
						<h2>Trusted Partners</h2>
					</div>
				</div>
				<div className="row">
					{
                        partnerData.map(function(item){
                            return(
                                <>
                                    <PartnerMainData img={item.img}/>
                                </>
                            )
                        })
                    }
				</div>
			</div>
		</div>
        </>
    )
}

export default OurPartner