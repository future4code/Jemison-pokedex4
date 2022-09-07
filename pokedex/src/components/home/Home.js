import { React, useContext } from "react";
import { Card } from "../cards/Card";
import { Cards } from "../cards/Styles";
import { Header } from "../header/Header";
import * as C from '../routes/Coordinator'
import { AllContexts } from "../../contexts/context";
import { AdicionarPokemon } from "../cards/cardButtons/addButton/AddButton";


export function HomePage() {

    // puxando dados da API através do context criado no App.js

    const { pokemons, isLoading, error, pokedex, setPokedex } = useContext(AllContexts)

    // dados do coordinator para os botões

    const [backToHome, headToPokedex] = C.Coordinator()

  const { states } = useContext(AllContexts)
  
  const pokemonList = states.pokemons &&
    states.pokemons.map((pokemon) => {
        return (
          <Card
            key={pokemon.name}
            name={pokemon.name}
          />
        );
      });
  return ( 
  <div>
    <Header backToHome={backToHome} headToPokedex={headToPokedex} pokedexDisappear={{ display: 'none' }} />
    <Cards>
      {pokemonList}
    </Cards>
  </div>
  )
}
