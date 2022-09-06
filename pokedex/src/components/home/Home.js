import { React, useContext} from "react"; 
import { Card } from "../cards/Card";
import { Cards  } from "../cards/Styles";
import { Header } from "../header/Header";
import * as C from '../routes/Coordinator'
import { AllContexts } from "../../contexts/context";
import { AdicionarPokemon } from "../cards/cardButtons/addButton/AddButton";


export function HomePage () {

    // puxando dados da API através do context criado no App.js

    const {pokemons, isLoading, error} = useContext(AllContexts)

    // dados do coordinator para os botões

    const [backToHome, headToPokedex] = C.Coordinator()

  
    return(
        <div>
            <Header backToHome={backToHome} headToPokedex={headToPokedex} pokedexDisappear={{ display: 'none'} } />
            <Cards>
                {isLoading && (<p>Carregando Pokemons</p>)}
                {!isLoading && error && (<p>Houve um erro ao carregar os pokemons. Recarregue a página.</p>)}
                {!isLoading && pokemons && pokemons.results && pokemons.results.map((pokemon, index) =>{
                    return <Card key={index} name={pokemon.name}/>})}
                <button onClick={() => AdicionarPokemon()} type='text' className='adicionar'  placeholder='Adicionar' alt='' />
            </Cards>
        </div>
);

}