import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { PallyHome } from "../pally_home/pally_home";
import './pally_index.css';

export function PallyIndex (){
    return(
        <BrowserRouter>
        <div>
            <header className="d-flex justify-content-between gap-3">
                <nav>
                    <div className="palfig"><Link to="/"><img src="favicon.ico" width="70px" height="50px"/></Link></div>

                    <div><span className="bi bi-list-task"></span></div>
                    <div>paaty</div>
                    <span>v2.3.2</span>
                </nav>
                <div>
                    <PallyHome/>
                </div>
                
            </header>   
        </div>
        <Routes>
             <Route path="/" element={<PallyHome/>} />
        </Routes>
        
 
        </BrowserRouter>
    )
}