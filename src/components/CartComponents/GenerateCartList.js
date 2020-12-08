import React from 'react'
import GenerateImageElement from '../GenerateImageElement/GenerateImageElement'
import { CloudinaryContext } from 'cloudinary-react'
import SizesInfo from './SizesInfo'
import { removeFromCart } from '../../services/helper-functions'
import config from '../../config'
import { TrashSimple } from 'phosphor-react'

export default class GenerateCartList extends React.Component {
  render() {
    const { cart, handleError, setCart, setTotalCost } = this.props
    if (cart && cart.length > 0) {
      return cart.map(image => {
        return (
          <li key={image.id} className="cart-item-container">
            <div className="cart-img-container">
              <CloudinaryContext cloudName={config.CLOUD_NAME} className="cloud-context">
                <GenerateImageElement image={image} width="160" />
              </CloudinaryContext>
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
        )
      })
    }

    return (
      <div className="cart-no-content fade-in">
        <span role="img" aria-label="pear" className="cart-pear">
          &#127824;
        </span>
        <div className="cart-empty-message">Your cart is empty</div>
      </div>
    )
  }
}