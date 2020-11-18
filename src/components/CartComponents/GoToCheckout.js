import React from 'react'
import { Link } from 'react-router-dom'
import { objectIsEmpty } from '../../services/helper-functions'

export default function GoToCheckout({ cart }) {
  if (!objectIsEmpty(cart)) {
    return (
      <Link to="/checkout" className="link-default">
        <button className="t-button go-to-checkout">CHECKOUT</button>
      </Link>
    )
  }

  return <></>
}