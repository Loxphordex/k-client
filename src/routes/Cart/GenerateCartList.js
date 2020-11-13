import React from 'react'
import GenerateImageElement from '../../components/GenerateImageElement/GenerateImageElement'
import { CloudinaryContext } from 'cloudinary-react'
import getCartInfo from './getCartInfo'
import SizesInfo from './SizesInfo'
import { addCart, removeFromCart } from '../../services/helper-functions'
import config from '../../config'

export default class GenerateCartList extends React.Component {
  render() {
    const { cart, handleError, setCart } = this.props
    const list = []
    if (cart) {
      for (const [name, size] of Object.entries(cart)) {
        const info = getCartInfo(size)
        console.log(info)
        list.push(
          <li key={info.details.id} className="cart-item-container">
            <CloudinaryContext cloudName={config.CLOUD_NAME} className="cloud-context">
              <GenerateImageElement image={info.details} width="120" />
            </CloudinaryContext>
            <h2 className="secondary-header">{name}</h2>
            <div>{info.count}</div>
            <SizesInfo info={info.sizes} />
            <button onClick={() => removeFromCart(info, cart, handleError, setCart)}>DELETE</button>
          </li>
        )
      }

      return list.map(l => l)
    }

    return <></>
  }
}