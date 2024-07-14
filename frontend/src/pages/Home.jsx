import { Link } from "react-router-dom";
import GuestList from "./GuestList";
import Include from "./Include";

function Home(){
    return(
        <div className="links">
            <button className="button-link"><Link to="/include" element={<Include/>}>Incluir Convidados</Link></button>
            <button className="button-link"><Link to="/guests" element={<GuestList/>}>Lista de Convidados</Link></button>
            
        </div>        
    )
}

export default Home;