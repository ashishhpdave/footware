import ShoseCartData from "../shoseCartMain"
const ShoseCartMain = [
    {
        div : "images/men.jpg",
        h2 : "Casuals"
    },
    {
        div : "images/women.jpg",
        h2 : "Casuals"  
    },
    {
        div : "images/men.jpg",
        h2 : "Casuals"
    },
]
function ShoesCart(){
    return(
        <>
            <div className="colorlib-featured">
			<div className="container">
				<div className="row">
					
					{
                        ShoseCartMain.map(function(item){
                            return(
                                <>
                                    <ShoseCartData div={item.div} h2={item.h2}/>
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

export default ShoesCart