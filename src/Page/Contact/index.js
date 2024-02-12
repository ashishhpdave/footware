import GetInTouch from "../../Component/common/GetInTouch"
import Breadcrumbs from "../../Component/common/breadcoums"
import ContactInformastion from "../../Component/common/contactDeatils"
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
        </>
    )
}

export default ContactPage