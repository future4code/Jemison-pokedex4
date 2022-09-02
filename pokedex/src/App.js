import React from 'react';
import { useState } from 'react';
import Router from './components/routes/Router';
import { baseURL } from './constants/baseURL';
import { useRequestData} from './hooks/useRequestData'
import { AllContexts } from './contexts/context'

function App() {

    // chamada da API que será passada como context
    const [update, setUpdate] = useState(0)

    const [pokemons, isLoading, error] = useRequestData(baseURL, {}, update)

  return (
    <AllContexts.Provider value={{update, setUpdate, pokemons, isLoading, error}} >
      <Router />
    </AllContexts.Provider>

  );
}

export default App;
