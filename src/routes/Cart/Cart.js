import React, { useState } from 'react'
import GenerateCartList from '../../components/CartComponents/GenerateCartList'
import ApiServices from '../../services/api-services'
import GoToCheckout from '../../components/CartComponents/GoToCheckout'
import { loadStripe } from '@stripe/stripe-js'
import './Cart.css'

const stripePromise = loadStripe('pk_test_51HfmUTEJnkA1sNW4qtl86yU2tVr1Tw5wpxoXzZ4lG3VYu1XetFRMZxyWnlP4LpCeuZNCETv9VunMi63tbZhz5iHh00ercseC9v')

export default function Cart({ cart, setCart }) {
  const [error, setError] = useState(null)

  const handleError = error => {
    setError(error)
  }

  const handleCheckout = async (cart) => {
    const request = this.setSessionRequestDefault(cart)
    const stripe = await stripePromise
    const response = await ApiServices.testLocalPaymentSession(request)

    // Redirect to checkout
    const result = await stripe.redirectToCheckout({
      sessionId: response.id
    })

    if (result.error) {
      console.log(result.error.message)
    }
  }

  const setSessionRequestDefault = (cart) => {
    return {
      cart,
      currency: 'usd'
    }
  }

  const setTotalCost = (cart) => {
    let tally = 0
    cart.forEach(image => {
      const accumCost = image.price * image.count
      tally += accumCost
    })
    return tally
  }

  const testSession = () => {
    ApiServices.testPaySessionEndpoint()
      .then((res) => console.log(res))
  }

  return ( 
    <div className="cart-page fade-in">
      {cart && cart.length > 0 && <h2 className="t-header cart-header">Cart</h2>}
      <section className="cart-main">
        <ul className="cart-list">
          <GenerateCartList 
            cart={cart} 
            handleError={handleError}
            setCart={setCart}
            setTotalCost={setTotalCost}
          />
        </ul>
        <div className="checkout-route-container">
          <GoToCheckout cart={cart} handleCheckout={handleCheckout} />
        </div>
      </section>
    </div>
  )
}