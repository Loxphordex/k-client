import React from 'react'

export default function GoToCheckout({ cart, handleCheckout }) {
  if (cart && cart.length > 0) {
    return (
      <button onClick={() => handleCheckout(cart)} className="t-button go-to-checkout">CHECKOUT</button>
    )
  }

  return <></>
}