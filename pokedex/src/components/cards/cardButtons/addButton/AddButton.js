import React, { useContext } from 'react'
import { AllContexts } from '../../../../contexts/context'

import add from '../../../../assets/add.png'
import remove from '../../../../assets/remove.png'

import { BotaoEsquerdo } from './Styles'

export function AddButton(props) {

    const { states } = useContext(AllContexts)

    const decidePokemon = (pokemon) => {
        const pokemonIndex = states.pokedex.findIndex((item) => { return item === pokemon })
        if (pokemonIndex === -1) {
            return (
                <BotaoEsquerdo onClick={props.addToPokedex} type='image' className='adicionar' src={add} alt='Adicionar' />
            )
        } else {
            return (
                <BotaoEsquerdo onClick={props.removeFromPokedex} type='image' className='remover' src={remove} alt='Remover' />
            )
        }
    }
    return (
        <div>
            {decidePokemon(props.pokemon)}
        </div>
    )
}
