import React from 'react'
import './AddToCart.css'

export default class AddToCart extends React.Component {
  addShirtToCart = () => {
    const { image, selectedSize, cart, addCart } = this.props
    if (image && selectedSize) {
      image.size = selectedSize
      addCart(image)
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