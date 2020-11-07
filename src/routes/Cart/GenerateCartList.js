import React from 'react'
import GenerateImageElement from '../../components/GenerateImageElement/GenerateImageElement'
import { CloudinaryContext } from 'cloudinary-react'
import getCartInfo from './getCartInfo'
import config from '../../config'

export default class GenerateCartList extends React.Component {
  render() {
    const { cart } = this.props
    const list = []
    if (cart) {
      for (const [name, size] of Object.entries(cart)) {
        const info = getCartInfo(size)
        list.push(
          <li key={info.details.id} className="cart-item-container">
            <h2>{name}</h2>
            <div>{info.count}</div>
            <div>{info.size}</div>
            <CloudinaryContext cloudName={config.CLOUD_NAME} className="cloud-context">
              <GenerateImageElement image={info.details} width="100" />
            </CloudinaryContext>
          </li>
        )
      }

      return list.map(l => l)
    }

    return <></>
  }
}