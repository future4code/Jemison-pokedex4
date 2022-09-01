import React from 'react'
import * as S from './Styles'

export const Card = (props) => {
  return (
    <S.CardStyle>
        <S.Foto></S.Foto>
        { props.name }
    </S.CardStyle>
  )
}
