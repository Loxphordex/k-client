import React from 'react'
import GenerateCartList from './GenerateCartList'

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

  render() {
    const { cart, setCart } = this.props
    return (
      <div className="cart-page">
        <GenerateCartList 
          cart={cart} 
          handleError={this.handleError}
          setCart={setCart}  
        />
      </div>
    )
  }
}