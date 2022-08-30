import React from "react" 
import {useNavigate} from "react-router-dom"



export function HomePage () {

const navigate = useNavigate()

const paginaPokedex = () => {
    navigate("/pokedex")
  }

return(
    <div>
        <button onClick={paginaPokedex}>Ver minha POKEDEX</button>
        <p>Home - Lista de Pokemons</p>
    </div>
)

}