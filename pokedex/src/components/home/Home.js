import React from "react"; 
import Pokemons from "../pokemons.json"
import { Card } from "../cards/Card";
import { Cards  } from "../cards/Styles";
import { Header } from "../header/Header";
import * as C from '../routes/Coordinator'



export function HomePage () {

    const [backToHome, headToPokedex] = C.Coordinator()

    return(
        <div>
            <Header backToHome={backToHome} headToPokedex={headToPokedex}/>
            <Cards>
            {
                Pokemons.map( pokemon =>{
                    return (
                        <Card name={pokemon.name} />
                    )
                })
            }
            </Cards>
        </div>
);

}