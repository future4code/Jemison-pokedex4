import React from "react"; 
import {useNavigate} from "react-router-dom";
import Pokemons from "../pokemons.json"
import { Card, Foto, Cards,  } from "../../styled";



export function HomePage () {

    const navigate = useNavigate();

    const paginaPokedex = () => {
    navigate("/pokedex")
    }

    return(
        <div>
            <p>Home - Lista de Pokemons</p>
            <button onClick={paginaPokedex}>Ver minha POKEDEX</button>
            <Cards>
            {
                Pokemons.map( pokemon =>{
                    return (
                        <Card>
                            <Foto></Foto>
                            { pokemon.name }
                        </Card>
                    )
                })
            }
            </Cards>
        </div>
);

}