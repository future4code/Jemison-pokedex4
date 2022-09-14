import { React, useContext} from "react"
import { AllContexts } from "../../contexts/context"

import { Header } from '../header/Header'
import { Cards } from "../cards/Styles"
import { Card } from "../cards/Card"

import * as C from '../routes/Coordinator'
import * as F from '../onclicks/OnClickFunctions'



export function PokedexPage() {

    // puxando dados da API através do context criado no App.js
    const { states } = useContext(AllContexts)

    const { backToHome, headToPokedex } = C.Coordinator()

    const { addToPokedex, removeFromPokedex } = F.OnClickFunctions()

    return (
        <div>
            <Header backToHome={backToHome} headToPokedex={headToPokedex} pokedexDisappear={{ display: 'none' }} />
            <Cards>
                {states.isLoading && (<p>Carregando Pokedex</p>)}
                {!states.isLoading && states.error && (<p>Houve um erro ao carregar sua pokedex. Recarregue a página.</p>)}
                {!states.isLoading && states.pokedex && states.pokedex.map((pokemon, index) => {
                    return <Card key={index} name={pokemon.name} image={pokemon.sprites.front_default} addToPokedex={() => addToPokedex(pokemon)} removeFromPokedex={() => removeFromPokedex(pokemon)} pokemon={pokemon} />
                })}
            </Cards>
        </div>
    )

}