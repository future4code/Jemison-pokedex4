import React from 'react'
import { AddButton } from './cardButtons/addButton/AddButton'
import { DetalhesPokemon } from './cardButtons/detailsButton/detailsButton'
import { Botoes } from './Styles'
import * as S from './Styles'
import * as C from '../routes/Coordinator'


export const Card = (props) => {

  const { headToDetails } = C.Coordinator()

  return (
    <S.CardStyle>
        <S.Foto onClick={() => {headToDetails(props.name)}} type='image' src={props.image}></S.Foto>
        <S.PokemonName>{ props.name }</S.PokemonName>
      <Botoes>
        <AddButton addToPokedex={props.addToPokedex} removeFromPokedex={props.removeFromPokedex} pokemon={props.pokemon}/>
        <DetalhesPokemon/>
      </Botoes>
    </S.CardStyle>
  )
}
