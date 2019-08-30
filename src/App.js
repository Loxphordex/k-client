import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'
import NewImageRoute from './routes/NewImageRoute/NewImageRoute'
import AuthRoute from './routes/AuthRoute/AuthRoute'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path='/' render={() => <Header />} />
        <Route path='/new' render={() => <NewImageRoute />} />
        <Route path='/auth' render={({ history }) => <AuthRoute history={history} />} />
      </div>
    );
  }
}

export default App;
