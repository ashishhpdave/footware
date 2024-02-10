import Hero from "../../Component/common/Hero"
import Header from "../../Component/common/header"
import ProductFilter from "../../Component/common/productFilter"
import Introtext from "../../Component/introtext"
import ProductRowMain from "../../Component/productRow"


function HomePage(){
    return(
        <>
            <header>
                <Header page="Home"/>
            </header>
            <Hero />
            <Introtext />
            <ProductFilter />
            <ProductRowMain />
        </>
    )
}

export default HomePage