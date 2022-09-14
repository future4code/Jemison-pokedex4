import { useContext } from "react"
import { AllContexts } from '../../contexts/context'
import { useNavigate } from "react-router-dom"

export const Coordinator = () => {
    const { setters } = useContext(AllContexts)

    const navigate = useNavigate()

    const backToHome = () => {
        setters.setPathValue(1)
        navigate('/')
    }

    const headToPokedex = () => {
        setters.setPathValue(2)
        navigate('/pokedex')
    }

    const headToDetails = (name) => {
        setters.setPathValue(3)
        navigate(`/details/${name}`)
    }

  return { backToHome, headToPokedex, headToDetails }
}
