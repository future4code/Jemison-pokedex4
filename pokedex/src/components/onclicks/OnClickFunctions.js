import { useContext } from "react"
import { AllContexts } from "../../contexts/context"

export const OnClickFunctions = () => {

    const { states, setters } = useContext(AllContexts)

    const addToPokedex = (pokemon) => {
        const newPokedex = [...states.pokedex]

        const pokemonIndex = states.pokedex.findIndex((item) => item.name === pokemon.name)

        if (pokemonIndex === -1) {
            newPokedex.push(pokemon)
        } else {
            alert(`${newPokedex[pokemonIndex].name} was already added to your pokedex.`)
        }

        setters.setPokedex(newPokedex)
    }

    const removeFromPokedex = (pokemon) => {
        const newPokedex = [...states.pokedex]
        const pokemonIndex = states.pokedex.findIndex((item) => item.name === pokemon.name)

        if (pokemonIndex === -1) {
            alert('o resultado foi -1')
        } else {
            newPokedex.splice(pokemonIndex, 1)
        }

        setters.setPokedex(newPokedex)
    }

    return { addToPokedex, removeFromPokedex }
}
