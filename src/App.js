import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'
import NewImageRoute from './routes/NewImageRoute/NewImageRoute'

function App() {
  return (
    <div className="App">
      <Route path='/' render={() => <Header />} />
      <Route path='/new' render={() => <NewImageRoute />} />
    </div>
  );
}

export default App;
