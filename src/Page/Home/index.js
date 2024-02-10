import Hero from "../../Component/common/Hero"
import Footer from "../../Component/common/footer"
import Header from "../../Component/common/header"
import OurPartner from "../../Component/common/ourPartnar"
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
            <OurPartner />
            <Footer />
        </>
    )
}

export default HomePage