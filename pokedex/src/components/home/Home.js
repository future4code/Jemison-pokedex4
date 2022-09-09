import { React, useContext } from "react";
import { AllContexts } from "../../contexts/context";

import * as S from './Styles'
import { Card } from "../cards/Card";
import { Cards } from "../cards/Styles";
import { Header } from "../header/Header";

import * as C from '../routes/Coordinator'
import * as F from '../onclicks/OnClickFunctions'



export function HomePage() {

  const { backToHome, headToPokedex } = C.Coordinator()

  const { addToPokedex, removeFromPokedex } = F.OnClickFunctions()

  const { states } = useContext(AllContexts)

  return (
    <S.HomeJS>
      <Header backToHome={backToHome} headToPokedex={headToPokedex} pokedexDisappear={{ display: 'none' }} />
      <Cards>

        {states.isLoading && (<p>Carregando Pokemons</p>)}
        {!states.isLoading && states.error && (<p>Houve um erro ao carregar os pokemons. Recarregue a página.</p>)}
        {!states.isLoading && states.pokemons && states.pokemons.map((pokemon, index) => {
          return <Card key={index} name={pokemon.name} image={pokemon.sprites.front_default} addToPokedex={() => addToPokedex(pokemon)} removeFromPokedex={ () => removeFromPokedex(pokemon)} pokemon={pokemon} />
        })}

      </Cards>
    </S.HomeJS>
  )
}
