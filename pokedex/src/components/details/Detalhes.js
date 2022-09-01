import React from "react" 
import { Header } from "../header/Header"
import * as C from '../routes/Coordinator'



export function DetailsPage () {

    const [backToHome, headToPokedex] = C.Coordinator()

return(
    <div>
        <Header backToHome={backToHome} headToPokedex={headToPokedex} />
    </div>
)

}