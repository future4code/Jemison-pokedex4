import React from 'react'
import { BotaoDecidePokemon } from './cardButtons/addButton/AddButton'
// import { DetalhesPokemon } from './cardButtons/detailsButton/detailsButton'
import * as S from './Styles'
import * as C from '../routes/Coordinator'


export const Card = (props) => {

  const [backToHome, headToPokedex, headToDetails] = C.Coordinator()

  return (
    <S.CardStyle>
        <S.Foto onClick={() => {headToDetails(props.name)}}></S.Foto>
        { props.name }
        <BotaoDecidePokemon onClick={props.addToPokedex} pokemon={props.pokemon}/>
        {/* <DetalhesPokemon /> */}
    </S.CardStyle>
  )
}
