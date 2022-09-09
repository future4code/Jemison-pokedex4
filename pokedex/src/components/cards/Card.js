import React from 'react'
import { AddButton } from './cardButtons/addButton/AddButton'
// import { DetalhesPokemon } from './cardButtons/detailsButton/detailsButton'
import * as S from './Styles'
import * as C from '../routes/Coordinator'


export const Card = (props) => {

  const { headToDetails } = C.Coordinator()

  return (
    <S.CardStyle>
        <S.Foto onClick={() => {headToDetails(props.name)}} type='image' src={props.image}></S.Foto>
        <S.PokemonName>{ props.name }</S.PokemonName>
        <AddButton addToPokedex={props.addToPokedex} removeFromPokedex={props.removeFromPokedex} pokemon={props.pokemon}/>
        {/* <DetalhesPokemon /> */}
    </S.CardStyle>
  )
}
