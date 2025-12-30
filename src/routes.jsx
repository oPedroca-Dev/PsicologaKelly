import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "./pages/inicio"
import PoliticaPrivacidade from "./pages/privacidade"
import TermosDeUso from "./pages/termos"

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/politica-privacidade' element={<PoliticaPrivacidade/>} />
                <Route path='/termos-uso' element={<TermosDeUso/>} />
            </Routes>
        </BrowserRouter>
    )
}