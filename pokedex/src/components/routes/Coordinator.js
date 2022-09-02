import { useContext } from "react"
import { HeaderButtonContext } from '../../App'
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

    const headToDetails = () => {
        setPathValue(3)
        navigate('/details/1')
    }

  return [backToHome, headToPokedex, headToDetails]
}
