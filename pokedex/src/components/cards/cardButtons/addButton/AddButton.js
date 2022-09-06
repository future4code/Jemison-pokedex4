import React from 'react'
import { BotaoEsquerdo } from './Styles'
import add from '../../../../assets/add.png'

export function AdicionarPokemon (props) {

return (
    <div>
        <BotaoEsquerdo onClick={props.onClick} type='image' className='adicionar' src={add} alt=''/>
    </div>
)

}