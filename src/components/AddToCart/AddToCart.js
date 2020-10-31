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
  constructor(props) {
    super(props)
    this.state = {
      id: null
    }
  }

  componentDidMount() {
    const { id } = this.props
    this.setState({ id })
  }

  addShirtToCart = id => {
    if (id && this.props.selectedSize) this.props.addCart(id)
  }

  checkIfDisabled = () => {
    if (this.props.selectedSize === null) return "add-cart-disabled"
    return String()
  }

  render() {
    const { id } = this.props
    return (
      <button 
        className={`add-to-cart ${this.checkIfDisabled()}`} 
        onClick={this.addShirtToCart(id)}>
        ADD TO CART
      </button>
    )
  }
}