import React from 'react'
import GenerateImageElement from '../GenerateImageElement/GenerateImageElement'
import SizesInfo from './SizesInfo'
import { removeFromCart } from '../../services/helper-functions'
import { TrashSimple } from 'phosphor-react'
import emptyIcon from '../../images/empty_cart.png'

export default class GenerateCartList extends React.Component {
  render() {
    const { cart, setCart, setTotalCost } = this.props
    if (cart && cart.length > 0) {
      return cart.map(image => {
        return (
          <div key={image.id}>
            <li key={image.id} className="cart-item-container">
              <div className="cart-img-container">
                <div className="cloud-context">
                  <GenerateImageElement image={image} width="160" />
                </div>
              </div>
              <div className="cart-item-details">
                <h2 className="cart-item-header">{image.name}</h2>
                <SizesInfo info={image.selectedSizes} />
              </div>
              <div className="cart-main-details">
                <button
                  className="cart-delete"
                  onClick={() => removeFromCart(image, cart, setTotalCost, setCart)}>
                  <TrashSimple className="trash-icon" size={28} />
                </button>
                <div className="cart-price">{`$${image.price * image.count}`}</div>
              </div>
            </li>
            <div className="total">
              {`Total: $${setTotalCost(cart)}`}
            </div>
          </div>
        )
      })
    }

    return (
      <div className="cart-no-content fade-in">
        <span role="img" aria-label="pear" className="cart-pear">
          <img className="empty-cart-logo" src={emptyIcon} alt='Pearegrine company logo' />
        </span>
        <div className="cart-empty-message">Your cart is empty</div>
      </div>
    )
  }
}