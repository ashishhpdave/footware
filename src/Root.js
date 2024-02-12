import './CSS/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./Page/Home"
import './js/jquery.flexslider-min'
import MenPage from './Page/Man'
import WomenPage from './Page/Women'
import AboutPage from './Page/About'
import ContactPage from './Page/Contact'
function Root(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/men" element={<MenPage />}/>
                    <Route path="/women" element={<WomenPage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/contact" element={<ContactPage />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root