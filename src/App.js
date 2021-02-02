import React from 'react'
import { Route } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'
import Header from './components/Header/Header'
import Gallery from './routes/Gallery/Gallery'
import NewImageRoute from './routes/NewImageRoute/NewImageRoute'
import AuthRoute from './routes/AuthRoute/AuthRoute'
import LoginRoute from './routes/LoginRoute/LoginRoute'
import Cart from './routes/Cart/Cart'
import Details from './routes/Details/Details'
import Confirm from './routes/Confirm/Confirm'
import Footer from './components/Footer/Footer'
import Discover from './routes/Discover/Discover'
import DiscoverArticle from './components/DiscoverArticle/DiscoverArticle'
import DiscoverEntry from './components/DiscoverEntry/DiscoverEntry'
import RedirectFromLanding from './routes/Redirect/RedirectFromLanding'
import { updateStorageCart } from './services/helper-functions'
import config from './config'
import './App.css'
import './Fonts.css'
import './styles/fadeIn.css'

class App extends React.Component {
  state = {
    images: null,
    cart: [],
    cartCount: 0,
    error: null
  }

  componentDidMount() {
    const storageCart = window.localStorage.getItem('pearegrineCart')
    if (storageCart) {
      const parsedCart = JSON.parse(storageCart)
      if (parsedCart && parsedCart !== 'undefined') {
        this.setState({
          cart: parsedCart
        }, () => this.setCartCount(this.state.cart))
      }
    }
  }

  setImages = (images) => {
    this.setState({ images })
  }

  setCart = async (cart) => {
    this.setState({ cart }, () => this.setCartCount(cart))
  }

  setCartCount = (cart) => {
    updateStorageCart(cart)
    let count = 0
    cart.map(c => {
      count += c.count
    })
    this.setState({
      cartCount: count
    })
  }

  render() {
    return (
      <div className="App">
        <CloudinaryContext cloudName={config.CLOUD_NAME}>
          <Route path="/" render={() => <Header cartCount={this.state.cartCount} />} />
          <Route exact path="/"><RedirectFromLanding /></Route>
          <Route exact path="/gallery/:modifier" render={({ history, match }) => <Gallery history={history} match={match} setImages={this.setImages} />} />
          <Route exact path="/discover" render={({ history }) => <Discover history={history} />} />
          <Route path="/discover/post" render={({ location }) => <DiscoverArticle location={location} />} />
          <Route path="/new_discover_entry" render={({ history }) => <DiscoverEntry history={history} />} />
          <Route path="/new" render={() => <NewImageRoute />} />
          <Route path="/auth" render={({ history }) => <AuthRoute history={history} />} />
          <Route path="/login" render={({ history }) => <LoginRoute history={history} />} />
          <Route path="/cart" render={() => <Cart cart={this.state.cart} images={this.state.images} setCart={this.setCart} />} />
          <Route path="/details" render={({ location }) => <Details location={location} cart={this.state.cart} setCart={this.setCart} />} />
          <Route path="/confirm"><Confirm cart={this.state.cart} /></Route>
          <Route path="/"><Footer /></Route>
        </CloudinaryContext>
      </div>
    )
  }
}

export default App
