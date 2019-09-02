import React from 'react'
//import TokenServices from '../../services/token-services'
import GenerateImageElement from '../GenerateImageElement/GenerateImageElement'

export default class GenerateImages extends React.Component {
  render() {
    const { images } = this.props
    return(
      <section className='generated-images'>
        {images && images.map(image => {
          return(
            <GenerateImageElement pic={image} />
          )
        })}
      </section>
    )
  }
}