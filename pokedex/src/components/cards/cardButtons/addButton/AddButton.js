import React, { useState } from 'react'
import { BotaoEsquerdo } from './Styles'
import add from '../../../../assets/add.png'
import remove from '../../../../assets/remove.png'
import * as C from '../../../routes/Coordinator'

export function AdicionarPokemon(props) {
    const [backToHome, headToPokedex, headToDetails] = C.Coordinator()

    const [pokedex, setPokedex] = useState([])

    const addPokemon = (pokemon) => {

        const newPokedex = [...pokedex]

        const pokemonIndex = pokedex.findIndex((item) => item.id === pokemon.id)

        if (pokemonIndex === -1) {
            newPokedex.push({ ...pokemon })
            return (
                <BotaoEsquerdo onClick={backToHome} type='image' className='remover' src={remove} alt='Remover' />
            )
        } else {
            <BotaoEsquerdo onClick={headToPokedex} type='image' className='adicionar' src={add} alt='Adicionar' />
        }
        setPokedex(newPokedex)
        }
        return (
            <div>
             {addPokemon}
            </div>
        )
    }
