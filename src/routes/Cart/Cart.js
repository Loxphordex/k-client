import React from 'react'
import GenerateCartList from './GenerateCartList'

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // iterate through the cart object and display image, count, delete button, add button
  render() {
    const { cart } = this.props
    return (
      <div className="cart-page">
        <GenerateCartList cart={cart} />
      </div>
    )
  }
}