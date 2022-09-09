import { React, useContext, useEffect, useState } from "react"
import { AllContexts } from "../../contexts/context"

import { useParams } from "react-router-dom"

import { baseURL } from "../../constants/baseURL"
import { useRequestData } from "../../hooks/useRequestData"

import { Header } from "../header/Header"
import * as S from "./Styles"

import * as C from '../routes/Coordinator'
import * as F from '../onclicks/OnClickFunctions'

import add from '../../assets/add.png'
import remove from '../../assets/remove.png'


export function DetailsPage() {

    const [update, setUpdate] = useState(0)

    const params = useParams()

    const { backToHome, headToPokedex } = C.Coordinator()
    const { addToPokedex, removeFromPokedex } = F.OnClickFunctions()

    const { states, setters } = useContext(AllContexts)

    useEffect(() => {
        setters.setPathParam(params.id)
    }, [setters, params.id])

    const [pokemon, isLoading, error] = useRequestData(`${baseURL}/${states.pathParam}`, {})

    const changeButton = (pkName) => {
        const pokemonIndex = states.pokedex.findIndex((item) => { return item.name === pkName })
        if (pokemonIndex === -1) {
            setUpdate(1)
            return add
        } else {
            setUpdate(2)
            return remove
        }
    }

    return (
        <div>
            <Header backToHome={backToHome} headToPokedex={headToPokedex} changeButton={() => changeButton(states.pathParam)} addPokemon={() => addToPokedex(pokemon)} removePokemon={() => removeFromPokedex(pokemon)} update={update} />
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
                                    <li><b><u>{item.stat.name}</u></b></li>
                                    <li>{item.base_stat} pts de dano</li>
                                    <li> -{item.effort} de desgaste </li>
                                </ul>
                            )
                        })}
                    </S.Stats>

                    <S.Type>
                        <ul>
                        {isLoading && (<p>Carregando Stats</p>)}
                        {!isLoading && error && (<p>Houve um erro ao carregar as stats. Recarregue a página.</p>)}
                        {!isLoading && pokemon && pokemon.types && pokemon.types.map((item, index) => {
                            return (
                                <li key={index}>{item.type.name}</li>
                            )
                        })}
                        </ul>
                    </S.Type>
                    <S.Moves>
                        <h2>Moves</h2>
                        {isLoading && (<p>Carregando Stats</p>)}
                        {!isLoading && error && (<p>Houve um erro ao carregar as stats. Recarregue a página.</p>)}
                        {!isLoading && pokemon && pokemon.moves && pokemon.moves.slice(0, 10).map((item, index) => {
                            return (
                                <p key={index}>{item.move.name}</p>
                            )
                        })}
                    </S.Moves>
                </S.AreaDetalhes>)}
        </div>
    )

}