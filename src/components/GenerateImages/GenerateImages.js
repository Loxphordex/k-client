import React from 'react'
import TokenServices from '../../services/token-services'
import GenerateImageElement from '../GenerateImageElement/GenerateImageElement'
import ImageEdit from '../../components/ImageEdit/ImageEdit'

export default class GenerateImages extends React.Component {
  render() {
    const { images } = this.props
    const token = TokenServices.getJwt()
    return(
      <section className='generated-images'>
        {images && images.map(image => {
          return(
            <div className='img-container'>
              { token && <ImageEdit /> }
              <GenerateImageElement pic={image} />
            </div>
          )
        })}
      </section>
    )
  }
}