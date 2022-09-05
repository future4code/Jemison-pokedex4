import { useState, useEffect} from 'react'
import axios from 'axios'

export const usePokemonData = (url, initialState) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [characters, setCharacters] = useState(initialState);

    useEffect( () => {
        let characterUrls = [];

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
          .then( results => setCharacters(results))
          .catch( error => {
            setError(error)
            console.error(error);
          });
      }, [url]);



  return [isLoading, error, characters]
}
