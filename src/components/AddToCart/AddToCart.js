import React from 'react'
import { addCart } from '../../services/helper-functions'
import './AddToCart.css'

export default class AddToCart extends React.Component {
  addShirtToCart = () => {
    const { cart, image, selectedSize, handleError, setCart } = this.props
    if (image && selectedSize) {
      addCart(image, cart, handleError, setCart, selectedSize)
    }
  }

  checkIfDisabled = () => {
    const { selectedSize } = this.props
    if (selectedSize === null) return "add-cart-disabled"
    return String()
  }

  render() {
    return (
      <button 
        className={`add-to-cart ${this.checkIfDisabled()}`} 
        onClick={this.addShirtToCart}>
        ADD TO CART
      </button>
    )
  }
}