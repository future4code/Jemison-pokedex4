import React from 'react'
import { BotaoDireito } from './Styles'
import mais from '../../../../assets/mais.png'
import * as C from '../../../routes/Coordinator'

export function DetalhesPokemon(props) {

    const { headToDetails } = C.Coordinator()

    return (
    
        <BotaoDireito onClick={() => {headToDetails(props.name)}} type='image' className='detalhes' src={mais} alt='Detalhes' />
)
}