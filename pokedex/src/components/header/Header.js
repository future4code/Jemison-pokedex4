import React, { useContext } from 'react'
import { AllContexts } from '../../contexts/context'

import logo from '../../assets/logo.png'
import pokeball from '../../assets/pokemon-icon.png'

import * as S from './Styles'

export const Header = (props) => {

  const { states } = useContext(AllContexts)

  const decideWhichButton = (path) => {
    if (path === 1) {
      return <S.PokeballJS onClick={props.headToPokedex} type='image' className='pokeball' src={pokeball} alt='' />
    } else if (path === 2) {
      return <S.PokeballJS style={props.pokedexDisappear} onClick={props.headToPokedex} type='image' className='pokeball' src={pokeball} alt='' />
    } else {
      return <S.PokeballJS style={props.pokedexDisappear} onClick={(props.update === 1 ? props.addPokemon : props.removePokemon)} type='image' className='pokeball' src={props.changeButton()} alt='' />
    }
  }

  return (
    <S.HeaderJS>
            <S.LogoJS onClick={props.backToHome} type='image' className='logo' src={logo} alt='' />
            {decideWhichButton(states.pathValue)}
    </S.HeaderJS>
  )
}
