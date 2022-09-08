import React, { useState } from "react";
import { AllContexts } from "./context";
import { baseURL } from "../constants/baseURL";
import { usePokemonData } from "../hooks/usePokemonData";

// arquivo global { verificado: true, refatorado: true}
// responsabilidade: guardar estados e dados

export const GlobalState = (props) => {

  // variável update, existe para dar refresh nas chamadas da API conforme existem modificações no backend. até o momento, opcional.

  const [update, setUpdate] = useState(1)

  // consumo da API

  const { isLoading, error, pokemons } = usePokemonData(baseURL, [])

  // array da pokedex
  const [pokedex, setPokedex] = useState([]);

  // variável pathValue, existe para realizar a condicional que renderiza ou não o botão conforme a página.

  const [pathValue, setPathValue] = useState(1)

  // variável pathParam, existe para receber os valores do path conforme o render.
  const [pathParam, setPathParam] = useState('')

  // organização do globalState
  
    const states = { update, pokedex, pathValue, pathParam, isLoading, error, pokemons };
    const setters = { setUpdate, setPokedex, setPathValue, setPathParam };
  
    return (
      <AllContexts.Provider value={{ states, setters }}>
        {props.children}
      </AllContexts.Provider>
    );
  };