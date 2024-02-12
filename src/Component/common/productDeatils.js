import ProductDeatilsMainData from "../productDeatilsData"

const processDataMain = [
	{
		img : "images/item-6.jpg",
		h3 : "Product Name",
		span : "68$.02"
	},
	{
		img : "images/item-7.jpg",
		h3 : "Product Name",
		span : "68$.02"
	},
	{
		img : "images/item-8.jpg",
		h3 : "Product Name",
		span : "68$.02"
	},
]
function ProductDeatilsMain(){
    return(
        <>
            	<div class="row row">
					<div class="col">
						<div class="product-name">
							<div class="one-forth text-left">
								<span>Product Details</span>
							</div>
							<div class="one-eight text-center">
								<span>Price</span>
							</div>
							<div class="one-eight text-center">
								<span>Quantity</span>
							</div>
							<div class="one-eight text-center">
								<span>Total</span>
							</div>
							<div class="one-eight text-center">
								<span>Remove</span>
							</div>
						</div>
						<div class="product-cart">
							
							{
								processDataMain.map(function(item){
									return(
										<>
										<ProductDeatilsMainData img={item.img} h3={item.h3} span={item.span}/>
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

export default ProductDeatilsMain