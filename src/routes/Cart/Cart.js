import React from 'react'
import GenerateCartList from '../../components/CartComponents/GenerateCartList'
import ApiServices from '../../services/api-services'
import GoToCheckout from '../../components/CartComponents/GoToCheckout'
import { loadStripe } from '@stripe/stripe-js'
import config from '../../config'
import './Cart.css'

const stripePromise = loadStripe(config.PUBLISHABLE_KEY)

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  handleError = error => {
    this.setState({ error })
  }

  handleCheckout = async () => {
    const stripe = await stripePromise

    const response = await ApiServices.testLocalPaymentSession()

    // Redirect to checkout
    const result = await stripe.redirectToCheckout({
      sessionId: response.id
    })

    if (result.error) {
      console.log(result.error.message)
    }
  }

  render() {
    const { cart, setCart } = this.props
    return ( 
      <div className="cart-page fade-in">
        <h2 className="t-header cart-header">Cart</h2>
        <ul className="cart-list">
          <GenerateCartList 
            cart={cart} 
            handleError={this.handleError}
            setCart={setCart}  
          />
        </ul>
        <div className="checkout-route-container">
          <GoToCheckout cart={cart} handleCheckout={this.handleCheckout} />
        </div>
      </div>
    )
  }
}