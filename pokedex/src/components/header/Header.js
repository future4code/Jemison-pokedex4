import React from 'react'
import logo from '../../assets/logo.png'
import pokeball from '../../assets/pokemon-icon.png'
import * as S from './Styles'

export const Header = (props) => {
  return (
    <S.HeaderJS>
            <S.LogoJS onClick={props.backToHome} type='image' className='logo' src={logo} alt='' />
            <S.PokeballJS onClick={props.headToPokedex} type='image' className='pokeball' src={pokeball} alt='' />
    </S.HeaderJS>
  )
}
