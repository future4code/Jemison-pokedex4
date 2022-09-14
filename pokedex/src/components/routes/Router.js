import { Route , BrowserRouter , Routes } from "react-router-dom";
import { HomePage } from "../home/Home";
import { PokedexPage } from "../pokedex/Pokedex";
import { DetailsPage } from "../details/Detalhes";


const Router = () => {

    return (
        <BrowserRouter>
            <Routes> 
                <Route index element= {<HomePage/>}  />
                <Route path="/pokedex" element= {<PokedexPage/>}/>
                <Route path="/details/:id" element= {<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
    }
export default Router