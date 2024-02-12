import GetInTouch from "../../Component/common/GetInTouch"
import Breadcrumbs from "../../Component/common/breadcoums"
import ContactInformastion from "../../Component/common/contactDeatils"
import Footer from "../../Component/common/footer"
import Header from "../../Component/common/header"

function ContactPage(){
    return(
        <>
            <header>
                <Header page="Contact"/>
            </header>
            <Breadcrumbs breadtext="Contact"/>
            <ContactInformastion />
            <GetInTouch />
            <Footer />
        </>
    )
}

export default ContactPage