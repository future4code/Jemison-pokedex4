import { React, useContext} from "react"
import { Header } from '../header/Header'
import { Cards } from "../cards/Styles"
import { Card } from "../cards/Card"
import * as C from '../routes/Coordinator'
import { AllContexts } from "../../contexts/context"



export function PokedexPage() {

    // puxando dados da API através do context criado no App.js
    const { isLoading, error, pokedex } = useContext(AllContexts)

    const [backToHome, headToPokedex] = C.Coordinator()

    return (
        <div>
            <Header backToHome={backToHome} headToPokedex={headToPokedex} pokedexDisappear={{ display: 'none' }} />
            <Cards>
                {isLoading && (<p>Carregando Pokedex</p>)}
                {!isLoading && error && (<p>Houve um erro ao carregar sua pokedex. Recarregue a página.</p>)}
                {!isLoading && pokedex && pokedex.map((pokemon, index) => {
                    return <Card key={index} name={pokemon.name} />
                })}
            </Cards>
        </div>
    )

}