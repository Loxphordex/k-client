import React from 'react'
import { Link } from 'react-router-dom'
import { objectIsEmpty } from '../../services/helper-functions'

export default function GoToCheckout({ cart, handleCheckout }) {
  if (!objectIsEmpty(cart)) {
    return (
      <Link to="/checkout" className="link-default">
        <button onClick={handleCheckout} className="t-button go-to-checkout">CHECKOUT</button>
      </Link>
    )
  }

  return <></>
}