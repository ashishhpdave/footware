import Hero from "../../Component/common/Hero"
import Header from "../../Component/common/header"



function HomePage(){
    return(
        <>
            <header>
                <Header page="Home"/>
            </header>
            <Hero />
        </>
    )
}

export default HomePage