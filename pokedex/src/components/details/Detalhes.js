import { React, useContext, useEffect } from "react"
import { Header } from "../header/Header"
import * as C from '../routes/Coordinator'
import * as S from "./Styles"
import { AllContexts } from "../../contexts/context"
import { useParams } from "react-router-dom"
import { useRequestData } from "../../hooks/useRequestData"
import { baseURL } from "../../constants/baseURL"




export function DetailsPage() {

    const params = useParams()

    const [backToHome, headToPokedex] = C.Coordinator()

    const { pathParam, setPathParam } = useContext(AllContexts)

    useEffect(() => {
        setPathParam(params.id)
    })

    const [pokemon, isLoading, error] = useRequestData(`${baseURL}/${pathParam}`, {})

    console.log(pokemon.moves)

    return (
        <div>
            <Header backToHome={backToHome} headToPokedex={headToPokedex} />
            {isLoading && (<p>Carregando Stats</p>)}
            {!isLoading && error && (<p>Houve um erro ao carregar as stats. Recarregue a página.</p>)}
            {!isLoading && pokemon && pokemon.sprites && (
                <S.AreaDetalhes>
                    <S.Front src={pokemon.sprites.front_default} />
                    <S.Back src={pokemon.sprites.back_default} />

                    <S.Stats>
                        <h2>Stats</h2>
                        {isLoading && (<p>Carregando Stats</p>)}
                        {!isLoading && error && (<p>Houve um erro ao carregar as stats. Recarregue a página.</p>)}
                        {!isLoading && pokemon && pokemon.stats && pokemon.stats.map((item, index) => {
                            return (
                                <ul key={index}>
                                    <li>Name: {item.stat.name}</li>
                                    <li>Base Stat: {item.base_stat}</li>
                                    <li>Effort: {item.effort}</li>
                                </ul>
                            )
                        })}
                    </S.Stats>

                    <S.Type>
                        {isLoading && (<p>Carregando Stats</p>)}
                        {!isLoading && error && (<p>Houve um erro ao carregar as stats. Recarregue a página.</p>)}
                        {!isLoading && pokemon && pokemon.types && pokemon.types.map((item, index) => {
                            return (
                                <h2 key={index}>Type {index + 1}: {item.type.name}</h2>
                            )
                        })}
                    </S.Type>
                    <S.Moves>
                        <h2>Moves</h2>
                        {isLoading && (<p>Carregando Stats</p>)}
                        {!isLoading && error && (<p>Houve um erro ao carregar as stats. Recarregue a página.</p>)}
                        {!isLoading && pokemon && pokemon.moves && pokemon.moves.slice(0, 10).map((item, index) => {
                            return (
                                <p>Move {index + 1}: {item.move.name}</p>
                            )
                        })}
                    </S.Moves>
                </S.AreaDetalhes>)}
        </div>
    )

}