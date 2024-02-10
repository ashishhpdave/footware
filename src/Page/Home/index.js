import Hero from "../../Component/common/Hero"
import Header from "../../Component/common/header"
import Introtext from "../../Component/introtext"


function HomePage(){
    return(
        <>
            <header>
                <Header page="Home"/>
            </header>
            <Hero />
            <Introtext />
        </>
    )
}

export default HomePage