import './CSS/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./Page/Home"
import './js/jquery.flexslider-min'
import MenPage from './Page/Man'
import WomenPage from './Page/Women'
function Root(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/men" element={<MenPage />}/>
                    <Route path="/women" element={<WomenPage />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root