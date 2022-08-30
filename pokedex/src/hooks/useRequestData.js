import { useState, useEffect} from 'react'
import axios from 'axios'

export const useRequestData = (url, initialState, update) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
        .then((response) => {
            setIsLoading(false)
            setData(response.data)
        }).catch((error) => {
            setError(error)
        })
    }, [url, update])

  return [data, isLoading, error]
}
