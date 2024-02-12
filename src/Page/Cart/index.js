import Breadcrumbs from "../../Component/common/breadcoums"
import Footer from "../../Component/common/footer"
import Header from "../../Component/common/header"
import ProductDeatilsMain from "../../Component/common/productDeatils"
import ProcessMethod from "../../Component/process"

function CartPage(){
    return(
        <>
            <header>
                <Header page="Cart"/>
            </header>
            <Breadcrumbs breadtext="Shoping Cart"/>
            <ProcessMethod />
            <ProductDeatilsMain />
            <Footer />
        </>
    )
}

export default CartPage