import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Gallery from './routes/Gallery/Gallery'
import NewImageRoute from './routes/NewImageRoute/NewImageRoute'
import AuthRoute from './routes/AuthRoute/AuthRoute'
import LoginRoute from './routes/LoginRoute/LoginRoute'
import Contact from './routes/Contact/Contact'
import Bio from './routes/Bio/Bio'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: {},
    }
  }
  render() {
    return (
      <div className="App">
        <Route path='/' render={() => <Header />} />
        <Route exact path='/' render={({ history }) => <Gallery history={history} />} />
        <Route path='/new' render={() => <NewImageRoute />} />
        <Route path='/auth' render={({ history }) => <AuthRoute history={history} />} />
        <Route path='/login' render={({ history }) => <LoginRoute history={history} />} />
        <Route path='/contact' render={() => <Contact />} />
        <Route path='/bio' render={() => <Bio />} />
      </div>
    );
  }
}

export default App;
