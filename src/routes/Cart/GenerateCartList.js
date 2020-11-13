import React from 'react'
import GenerateImageElement from '../../components/GenerateImageElement/GenerateImageElement'
import { CloudinaryContext } from 'cloudinary-react'
import getCartInfo from './getCartInfo'
import SizesInfo from './SizesInfo'
import { removeFromCart } from '../../services/helper-functions'
import config from '../../config'
import { TrashSimple } from 'phosphor-react'

export default class GenerateCartList extends React.Component {
  render() {
    const { cart, handleError, setCart } = this.props
    const list = []
    if (cart) {
      for (const [name, size] of Object.entries(cart)) {
        const info = getCartInfo(size)
        list.push(
          <li key={info.details.id} className="cart-item-container">
            <div className="cart-img-container">
              <CloudinaryContext cloudName={config.CLOUD_NAME} className="cloud-context">
                <GenerateImageElement image={info.details} width="120" />
              </CloudinaryContext>
            </div>
            <div className="cart-item-details">
              <h2 className="cart-item-header">{name}</h2>
              <div>{info.count}</div>
              <SizesInfo info={info.sizes} />
            </div>
            <div className="cart-main-details">
              <div className="cart-price">{`$${info.details.price}`}</div>
              <button
                className="cart-delete"
                onClick={() => removeFromCart(info, cart, handleError, setCart)}>
                <TrashSimple className="trash-icon" size={28} />
              </button>
            </div>
          </li>
        )
      }

      return list.map(l => l)
    }

    return <></>
  }
}