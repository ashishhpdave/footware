import About from "../../Component/about"
import Breadcrumbs from "../../Component/common/breadcoums"
import Footer from "../../Component/common/footer"
import Header from "../../Component/common/header"

function AboutPage(){
    return(
        <>
            <header>
                <Header page="About"/>
            </header>
            <Breadcrumbs breadtext="About"/>
            <About />
            <Footer />
        </>
    )
}

export default AboutPage