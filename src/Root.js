import './CSS/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./Page/Home"
import './js/jquery.flexslider-min'
import MenPage from './Page/Man'
function Root(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/men" element={<MenPage />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Root