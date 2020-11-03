import React from 'react'
import './AddToCart.css'

/**
 * This is a button to add a shirt to the cart
 * I think we'll add only 1 shirt to the cart when pressing this,
 * then in the cart menu you can change the number of shirts you
 * wish to purchase.
 * This will keep the details page free of an unecessary input
 * Upon clicking AddToCart some animation will play, and a number
 * will appear on the cart icon indicating the amount of items in there.
 * 
 * Also the cart should be stored in local storage and updated upon
 * clicking the button
 * 
 * A confirmation should appear after clicking that **prevents**
 * the user from adding another of the same shirt
 */

export default class AddToCart extends React.Component {
  addShirtToCart = () => {
    const { image, selectedSize, cart, addCart } = this.props
    if (image && selectedSize) {
      image.size = selectedSize
      addCart(image)
      window.localStorage.setItem('pearegrineCart', JSON.stringify(cart))
      const cartobj = window.localStorage.getItem('pearegrineCart')
      console.log(cartobj)
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