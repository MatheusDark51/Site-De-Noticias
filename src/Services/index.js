import { Routes,Route } from "react-router-dom";

import Home from "../Pages/Home";
import Politica from "../Pages/Politica";
import Noticia from "../Pages/Noticia";
import Comercio from "../Pages/Comercio"
import Esportes from "../Pages/Esportes";
import Lazer from "../Pages/Lazer";
import Saude from "../Pages/Saúde"
import Serviços from "../Pages/Serviços"
import O_Mundo from "../Pages/O Mundo"
function Rotas(){

    return(
       
        <Routes>
            <Route exact path="/" element={<Home/>} />
            
            <Route exact path="/politica" element={<Politica/>} />
            <Route exact path="/comercio" element={<Comercio/>} />
            <Route exact path="/esportes" element={<Esportes/>} />
            <Route exact path="/lazer" element={<Lazer/>} />
            <Route exact path="/saude" element={<Saude/>} />
            <Route exact path="/servicos" element={<Serviços/>} />
            <Route exact path="/o_mundo" element={<O_Mundo/>} />
            
            <Route exact path="/noticia" element={<Noticia/>} />
        </Routes>
        
    )

}

export default Rotas;