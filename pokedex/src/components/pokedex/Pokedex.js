import React from "react" 
import { Header } from '../header/Header'
import * as C from '../routes/Coordinator'



export function PokedexPage () {

    const [backToHome, headToPokedex] = C.Coordinator()

return(
    <div>
        <Header backToHome={backToHome} headToPokedex={headToPokedex} pokedexDisappear={{ display: 'none'} } />
    </div>
)

}