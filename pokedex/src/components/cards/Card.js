import React from 'react'
import { AdicionarPokemon } from './cardButtons/addButton/AddButton'
// import { DetalhesPokemon } from './cardButtons/detailsButton/detailsButton'
import * as S from './Styles'
import * as C from '../routes/Coordinator'


export const Card = (props) => {

  const [backToHome, headToPokedex, headToDetails] = C.Coordinator()

  return (
    <S.CardStyle>
        <S.Foto onClick={() => {headToDetails(props.name)}}></S.Foto>
        { props.name }
        <AdicionarPokemon onClick={props.addToPokedex} />
        {/* <DetalhesPokemon /> */}
    </S.CardStyle>
  )
}
