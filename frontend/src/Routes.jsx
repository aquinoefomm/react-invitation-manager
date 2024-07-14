import { BrowserRouter, Routes, Route } from "react-router-dom";
import Include from "./pages/Include";
import GuestList from "./pages/GuestList";
import Home from "./pages/Home";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/include" element={<Include />} />
                <Route path="/guests" element={<GuestList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;