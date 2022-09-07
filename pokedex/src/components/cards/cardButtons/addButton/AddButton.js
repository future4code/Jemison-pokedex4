import React, { useContext } from 'react'
import { BotaoEsquerdo } from './Styles'
import remove from '../../../../assets/remove.png'
import * as C from '../../../routes/Coordinator'
import { AllContexts } from '../../../../contexts/context'
import add from '../../../../assets/add.png'

export function BotaoDecidePokemon(props) {
    const [backToHome, headToPokedex] = C.Coordinator()

    const {pokedex} = useContext(AllContexts)

    const decidePokemon = (pokemon) => {

        const pokemonIndex = pokedex.findIndex((item) => {
            return item === pokemon})

        if (pokemonIndex === -1) {
           
            return (
                <BotaoEsquerdo onClick={backToHome} type='image' className='adicionar' src={add} alt='Adicionar' />
            )
        } else {
            return (
            <BotaoEsquerdo onClick={headToPokedex} type='image' className='remover' src={remove} alt='Remover' />
            )
        } }
        return (
            <div>
              {decidePokemon(props.pokemon)}
            </div>
        )
    }
