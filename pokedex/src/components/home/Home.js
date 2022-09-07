import { React, useContext } from "react";
import { Card } from "../cards/Card";
import { Cards } from "../cards/Styles";
import { Header } from "../header/Header";
import * as C from '../routes/Coordinator'
import { AllContexts } from "../../contexts/context";
import {BotaoDecidePokemon  } from "../cards/cardButtons/addButton/AddButton";


export function HomePage() {

    // puxando dados da API através do context criado no App.js

    const { pokemons, isLoading, error, pokedex, setPokedex } = useContext(AllContexts)

    // dados do coordinator para os botões

    const [backToHome, headToPokedex] = C.Coordinator()

    // função de adicionar pokemons à pokedex
    const addToPokedex = (pokemon) => {
        const newPokedex = [...pokedex]

        const pokemonIndex = pokedex.findIndex((item) => item.name === pokemon.name)

        if (pokemonIndex === -1) {
            newPokedex.push(pokemon)
        } else {
            alert(`${newPokedex[pokemonIndex].name} was already added to your pokedex.`)
        }

        setPokedex(newPokedex)
    }


    return (

        <div>
            <Header backToHome={backToHome} headToPokedex={headToPokedex} pokedexDisappear={{ display: 'none' }} />
            <Cards>
                {isLoading && (<p>Carregando Pokemons</p>)}
                {!isLoading && error && (<p>Houve um erro ao carregar os pokemons. Recarregue a página.</p>)}
                {!isLoading && pokemons && pokemons.results && pokemons.results.map((pokemon, index) =>{
                    return <Card key={index} name={pokemon.name} addToPokedex={() => addToPokedex(pokemon)} pokemon={pokemon} />
                })}
                <button onClick={() => BotaoDecidePokemon()} type='text' className='adicionar'  placeholder='Adicionar' alt='' />
            </Cards>
        </div>
    );

}