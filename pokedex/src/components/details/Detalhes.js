import React from "react" 
import { Header } from "../header/Header"
import * as C from '../routes/Coordinator'
import * as S from "./Styles"



export function DetailsPage () {

    const [backToHome, headToPokedex] = C.Coordinator()

return(
    <div>
        <Header backToHome={backToHome} headToPokedex={headToPokedex} />
        <S.AreaDetalhes>
            <S.Front>
                
            </S.Front>


            <S.Back>

            </S.Back>


            <S.Stats>
                <h2>Stats</h2>
            </S.Stats>


            <S.Type>
                <h2>Type 1:</h2>
                <h2>Type 2:</h2>
            </S.Type>


            <S.Moves>
                <h2>Moves</h2>
            </S.Moves>
        </S.AreaDetalhes>
    </div>
)

}