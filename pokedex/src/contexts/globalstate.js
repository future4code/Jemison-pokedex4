import { AllContext } from "./context";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/baseURL";
import { useRequestData } from "../hooks/useRequestData";

export const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);
  
    export const states = { pokemons, pokedex };
    const setters = { setPokemons, setPokedex };
  
    const [data] = useRequestData(`${BASE_URL}?limit=30`, {});
  
    useEffect(() => {
      setPokemons(data.results);
    }, [data]);
  
    const listPokedex = [];
  
    const adicionaPokemon = (id) => {
      const index = pokemons.findIndex((pokemon) => {
        return pokemons.id === id;
      });
  
      if (index === -1) {
        listPokedex.push({ ...pokemons });
      }
      setPokemons(listPokedex);
    };
  
    console.log(listPokedex);
  
    return (
      <AllContext.Provider
        value={{ states, setters, adicionaPokemon, listPokedex }}
        >
        {props.children}
      </AllContext.Provider>
    );
  };