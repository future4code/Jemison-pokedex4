import React from "react" 
import {useNavigate} from "react-router-dom"



export function DetailsPage () {

const navigate = useNavigate()

const paginaPokedex = () => {
    navigate("/pokedex")
  }

return(
    <div>
        <button onClick={paginaPokedex}>Voltar</button>
        <p>Página de detalhes</p>
    </div>
)

}