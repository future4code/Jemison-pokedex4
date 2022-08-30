import { Route } from "react-router-dom";


const Router = () => {

    return (
        <BrowserRouter>
            <Routes> 
                <Route index element= {<Home/>}  />
                <Route path="/pokedex" element= {<PokedexPage/>}/>
                <Route path="/details" element= {<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )


export default Router