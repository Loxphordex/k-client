import React from 'react'
import TokenServices from '../../services/token-services'
import GenerateImageElement from '../GenerateImageElement/GenerateImageElement'
import ImageEdit from '../../components/ImageEdit/ImageEdit'

export default class GenerateImages extends React.Component {
  render() {
    const { images } = this.props
    const reverseImages = images.reverse()
    console.log(images[0])
    const token = TokenServices.getJwt()
    return(
      <section className='generated-images'>
        {images && reverseImages.map(image => {
          return(
            <div className='img-container' key={image.url}>
              { token && <ImageEdit /> }
              <GenerateImageElement pic={image} />
            </div>
          )
        })}
      </section>
    )
  }
}