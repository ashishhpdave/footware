import { NavLink } from "react-router-dom"
import ProductItem from "./productRowItem"

const ProductItemDynamic = [
    {
        img : "images/item-1.jpg",
        h2 : "Women's Boots Shoes Maca",
        span : "$139.00"
    },
    {
        img : "images/item-2.jpg",
        h2 : "WOMEN'S MINAM MEAGHAN",
        span : "$139.00"
    },
    {
        img : "images/item-3.jpg",
        h2 : "MEN'S TAJA COMMISSIONER",
        span : "$139.00"
    },
    {
        img : "images/item-4.jpg",
        h2 : "RUSS MEN'S SNEAKERS",
        span : "$139.00"
    },
    {
        img : "images/item-5.jpg",
        h2 : "Women's Boots Shoes Maca",
        span : "$139.00"
    },
    {
        img : "images/item-6.jpg",
        h2 : "Women's Boots Shoes Maca",
        span : "$139.00"
    },
    {
        img : "images/item-7.jpg",
        h2 : "Men's Boots Shoes",
        span : "$139.00"
    },
    {
        img : "images/item-8.jpg",
        h2 : "Men's Home Shoes",
        span : "$139.00"
    },
    {
        img : "images/item-9.jpg",
        h2 : "Men's Sport Shoes",
        span : "$139.00"
    },
    {
        img : "images/item-10.jpg",
        h2 : "Men's Woking Shoes",
        span : "$139.00"
    },
    {
        img : "images/item-11.jpg",
        h2 : "Women's Shoes Maca",
        span : "$139.00"
    },
    {
        img : "images/item-12.jpg",
        h2 : "Women's Boots Shoes Maca",
        span : "$139.00"
    },
    {
        img : "images/item-13.jpg",
        h2 : "Women's Boots Shoes Maca",
        span : "$139.00"
    },
    {
        img : "images/item-14.jpg",
        h2 : "Women's Boots Shoes Maca",
        span : "$139.00"
    },
    {
        img : "images/item-15.jpg",
        h2 : "Women's Boots Shoes Maca",
        span : "$139.00"
    },
    {
        img : "images/item-16.jpg",
        h2 : "Women's Boots Shoes Maca",
        span : "$139.00"
    },

]
function ProductRowMain(item){
    const {title} = item
    return(
        <>
            
		<div className="colorlib-product">
			<div className="container">
				<div className="row">
					<div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
						<h2>{title}</h2>
					</div>
				</div>
				<div className="row row-pb-md">
					{
                        ProductItemDynamic.map(function(item){
                            return(
                                <>
                                    <ProductItem img={item.img} h2={item.h2} span={item.span}/>
                                </>
                            )
                        })
                    }
					</div>				 				
				<div className="row">
					<div className="col-md-12 text-center">
						<p><NavLink href="#" className="btn btn-primary btn-lg">Shop All Products</NavLink></p>
					</div>
				</div>
			</div>
		</div>
        </>
    )
}

export default ProductRowMain