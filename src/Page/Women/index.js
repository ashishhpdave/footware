import Breadcrumbs from "../../Component/common/breadcoums"
import Footer from "../../Component/common/footer"
import Header from "../../Component/common/header"
import OurPartner from "../../Component/common/ourPartnar"
import ShoesCart from "../../Component/common/shoseCart"
import MenHeroBar from "../../Component/menHero"
import ProductRowMain from "../../Component/productRow"
import WomenSlider from "../../Component/womenSlider"

function WomenPage(){
    return(
        <>
            <header>
                <Header page="women"/>
            </header>
            <Breadcrumbs breadtext="Women's"/>
            <MenHeroBar title="Women's"/>
            <ShoesCart />
            <WomenSlider />
            <ProductRowMain />
            <OurPartner />
            <Footer />
        </> 
    )
}

export default WomenPage