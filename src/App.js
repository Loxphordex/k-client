import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Route path='/' render={() => <Header />} />
    </div>
  );
}

export default App;
