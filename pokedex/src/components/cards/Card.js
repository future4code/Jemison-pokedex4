import React from 'react'
import { AdicionarPokemon } from './cardButtons/addButton/AddButton'
import * as S from './Styles'


export const Card = (props) => {

  return (
    <S.CardStyle>
        <S.Foto></S.Foto>
        { props.name }
        <AdicionarPokemon />
    </S.CardStyle>
  )
}
