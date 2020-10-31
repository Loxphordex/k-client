import React from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Gallery from './routes/Gallery/Gallery'
import NewImageRoute from './routes/NewImageRoute/NewImageRoute'
import AuthRoute from './routes/AuthRoute/AuthRoute'
import LoginRoute from './routes/LoginRoute/LoginRoute'
import Contact from './routes/Contact/Contact'
import AboutUs from './routes/AboutUs/AboutUs'
import Details from './routes/Details/Details'
import './Fonts.css'
import './styles/fadeIn.css'

class App extends React.Component {
  state = {
    cart: {}
  }

  addCart = id => {
    console.log('addCart ran')
    if (id) {
      if (this.state.cart[id]) {
        this.state.cart[id]++
      } else {
        this.state.cart[id] = 1
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={() => <Header />} />
        <Route exact path="/" render={({ history }) => <Gallery history={history} />} />
        <Route path="/new" render={() => <NewImageRoute />} />
        <Route path="/auth" render={({ history }) => <AuthRoute history={history} />} />
        <Route path="/login" render={({ history }) => <LoginRoute history={history} />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/aboutus" render={() => <AboutUs />} />
        <Route path="/details" render={({ location }) => <Details location={location} addCart={this.addCart} />} />
      </div>
    )
  }
}

export default App
