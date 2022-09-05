import React from 'react'
import { BotaoEsquerdo } from './Styles'
import add from '../../../../assets/add.png'
import * as C from '../../../routes/Coordinator'

export function AdicionarPokemon (props) {
    const [backToHome, headToPokedex, headToDetails] = C.Coordinator()

return(
    <div>
        <BotaoEsquerdo onClick={headToDetails} type='image' className='adicionar' src={add} alt=''/>
    </div>
)

}