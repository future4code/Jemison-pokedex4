import { useNavigate } from "react-router-dom"

export const Coordinator = () => {
    const navigate = useNavigate()

    const backToHome = () => {
        navigate('/')
    }

    const headToPokedex = () => {
        navigate('/pokedex')
    }

  return [backToHome, headToPokedex]
}
