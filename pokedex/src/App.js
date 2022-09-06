import React, { useState } from 'react';
import Router from './components/routes/Router';
import { baseURL } from './constants/baseURL';
import { useRequestData} from './hooks/useRequestData'
import { AllContexts } from './contexts/context'
import { HeaderButtonContext } from './contexts/context'



function App() {

  const [pathValue, setPathValue] = useState(1)

  const [update, setUpdate] = useState(1)
  const [pokemons, isLoading, error] = useRequestData(baseURL, [], update)
  const [pokedex, setPokedex] = useState([])
  const [pathParam, setPathParam] = useState('')

  return (
    <AllContexts.Provider value={{update, setUpdate, pokemons, isLoading, error, pokedex, setPokedex, pathParam, setPathParam}} >
      <HeaderButtonContext.Provider value={{pathValue, setPathValue}}>
        <Router />
     </HeaderButtonContext.Provider>
    </AllContexts.Provider>
  );
}

export default App;
