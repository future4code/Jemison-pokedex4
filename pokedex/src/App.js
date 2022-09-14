import React from 'react';
import { GlobalState } from './contexts/globalstate';
import Router from './components/routes/Router';

// app.js { verificado: true, refatorado: true}
// responsabilidade: apenas renderizar o globalState + router

function App() {

  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
