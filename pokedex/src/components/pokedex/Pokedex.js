import React from "react" 
import {useNavigate} from "react-router-dom"



export function PokedexPage () {

const navigate = useNavigate()

const paginaHome = () => {
    navigate("/")
  }

return(
    <div>
        <button onClick={paginaHome}>Voltar para lista de Pokemons</button>
        <p>POKEDEX</p>
    </div>
)

}