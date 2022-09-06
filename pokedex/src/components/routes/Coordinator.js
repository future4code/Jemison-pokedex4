import { useContext } from "react"
import { HeaderButtonContext } from '../../contexts/context'
import { useNavigate } from "react-router-dom"

export const Coordinator = () => {
    const {setPathValue} = useContext(HeaderButtonContext)

    const navigate = useNavigate()

    const backToHome = () => {
        setPathValue(1)
        navigate('/')
    }

    const headToPokedex = () => {
        setPathValue(2)
        navigate('/pokedex')
    }

    const headToDetails = (name) => {
        setPathValue(3)
        navigate(`/details/${name}`)
    }

  return [backToHome, headToPokedex, headToDetails]
}
