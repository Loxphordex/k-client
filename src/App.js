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
    cart: {},
    cartCount: 0,
    error: null
  }

  componentDidMount() {
    const storageCart = window.localStorage.getItem('pearegrineCart')
    if (storageCart) {
      const parsedCart = JSON.parse(storageCart)
      this.setState({
        cart: parsedCart
      }, this.addToCartCount)
    }
  }

  handleError = error => {
    if (error !== undefined) {
      this.setState({ error })
      setTimeout(() => {
        this.setState({ error: null })
      }, 10_000);
    }
  }

  updateStorageCart = () => {
    window.localStorage.setItem('pearegrineCart', JSON.stringify(this.state.cart))
  }

  addToCartCount = () => {
    const { cart } = this.state
    let tally = 0

    this.updateStorageCart()
    for (const [name, size] of Object.entries(cart)) {
      for (const [key, info] of Object.entries(size)) {
        tally += info.count
      }
    }

    this.setState({
      cartCount: tally
    })
  }

  addCart = image => {
    if (image) {
      const availableProducts = image[image.size.toLowerCase()]
      const imageObject = {
        count: 1,
        details: image
      }

      const imageEntry = this.state.cart[image.name]
      if (imageEntry) { // If this shirt is already in the cart
        const imageSizeEntry = imageEntry[image.size]
        if (imageSizeEntry) { // If the size of this shirt is already in the cart
          imageObject.count = imageSizeEntry.count + 1
          if (imageObject.count > availableProducts) {
            this.handleError({
              type: "cart-unavailable",
              message: "No additional sizes are available"
            })
          } else {
            this.setState({
              cart: {
                ...this.state.cart,
                [image.name]: {
                  ...this.state.cart[image.name],
                  [image.size]: imageObject
                }
              }
            }, this.addToCartCount)
          }
        } else {  // Shirt is in cart but not in this size
          this.handleError(null)
          this.setState({
            cart: {
              ...this.state.cart,
              [image.name]: {
                ...this.state.cart[image.name],
                [image.size]: imageObject
              }
            }
          }, this.addToCartCount)
        }
      } else { // A new shirt is added to the cart
        this.handleError(null)
        this.setState({
          cart: {
            ...this.state.cart,
            [image.name]: {
              [image.size]: imageObject
            }
          }
        }, this.addToCartCount)
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={() => <Header cartCount={this.state.cartCount} />} />
        <Route exact path="/" render={({ history }) => <Gallery history={history} />} />
        <Route path="/new" render={() => <NewImageRoute />} />
        <Route path="/auth" render={({ history }) => <AuthRoute history={history} />} />
        <Route path="/login" render={({ history }) => <LoginRoute history={history} />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/aboutus" render={() => <AboutUs />} />
        <Route path="/details" 
          render={({ location }) => <Details 
            location={location}
            cart={this.state.cart}
            addCart={this.addCart}
            handleError={this.handleError}
            error={this.state.error} />} />
      </div>
    )
  }
}

export default App
