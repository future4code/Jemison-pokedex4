import React from 'react'
import { BotaoEsquerdo } from './Styles'
import add from '../../assets/add.png'

export function AdicionarPokemon () {


return(
    <div>
        <BotaoEsquerdo type='image' className='adicionar' src={add} alt=''/>
    </div>
)

}