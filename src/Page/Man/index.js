import Breadcrumbs from "../../Component/common/breadcoums"
import Footer from "../../Component/common/footer"
import Header from "../../Component/common/header"
import OurPartner from "../../Component/common/ourPartnar"
import ShoesCart from "../../Component/common/shoseCart"
import MenHeroBar from "../../Component/menHero"
import ProductRowMain from "../../Component/productRow"

function MenPage(){
    return(
        <>
            <header>
                <Header page="Man"/>
            </header>
            <Breadcrumbs />
            <MenHeroBar />
            <ShoesCart />
            <ProductRowMain title={"View All Product"}/>
            <OurPartner />
            <Footer />
        </>
    )
}

export default MenPage