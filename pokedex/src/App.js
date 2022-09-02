import React, { useState } from 'react';
import Router from './components/routes/Router';

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
