import { useState, useEffect} from 'react'
import axios from 'axios'

export const usePokemonData = (url, initialState) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [pokemons, setPokemons] = useState(initialState);

    useEffect( () => {
        setIsLoading(true)
        axios.get(url)
          .then( result => {
            return axios.all(result.data.results.map( character => {
              return axios.get(character.url);
            }))
          })
          .then( results => {
            return results.map( character => character.data);
          })
          .then( results => {
            setIsLoading(false) 
            setPokemons(results) })
          .catch( error => {
            setError(error)
            console.error(error);
          });
      }, [url]);



  return { isLoading, error, pokemons }
}
