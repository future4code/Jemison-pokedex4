import React, { useState } from 'react';
import Router from './components/routes/Router';
import { baseURL } from './constants/baseURL';
import { useRequestData} from './hooks/useRequestData'
import { AllContexts } from './contexts/context'

export const HeaderButtonContext=React.createContext()

function App() {

  const [pathValue, setPathValue] = useState(1)

  return (
    <HeaderButtonContext.Provider value={{pathValue, setPathValue}}>
      <Router />
    </HeaderButtonContext.Provider>
  );
}

export default App;
