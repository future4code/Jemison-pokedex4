import React, { useContext } from 'react'
import { HeaderButtonContext } from '../../contexts/context'
import logo from '../../assets/logo.png'
import pokeball from '../../assets/pokemon-icon.png'
import remove from '../../assets/remove.png'
import * as S from './Styles'

// lembrete ( alterar a onClick do case else, pq não é para ir para a pokedex e sim remover da pokedex com esse botão)

export const Header = (props) => {

  const {pathValue} = useContext(HeaderButtonContext)

  console.log(pathValue)

  const decideWhichButton = (path) => {
    if (path === 1) {
      return <S.PokeballJS onClick={props.headToPokedex} type='image' className='pokeball' src={pokeball} alt='' />
    } else if (path === 2) {
      return <S.PokeballJS style={props.pokedexDisappear} onClick={props.headToPokedex} type='image' className='pokeball' src={pokeball} alt='' />
    } else {
      return <S.PokeballJS style={props.pokedexDisappear} onClick={props.headToPokedex} type='image' className='pokeball' src={remove} alt='' />
    }
  }

  return (
    <S.HeaderJS>
            <S.LogoJS onClick={props.backToHome} type='image' className='logo' src={logo} alt='' />
            {decideWhichButton(pathValue)}
    </S.HeaderJS>
  )
}
