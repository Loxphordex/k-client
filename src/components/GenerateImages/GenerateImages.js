import React from 'react'
import TokenServices from '../../services/token-services'
import GenerateImageElement from '../GenerateImageElement/GenerateImageElement'
import FalseDisplacementImage from '../FalseDisplacementImage/FalseDisplacementImage'
import ImageEdit from '../ImageEdit/ImageEdit'

export default class GenerateImages extends React.Component {
  imageMatchesModifier = (image) => {
    const { modifier } = this.props
    if (!modifier || modifier === 'all') return true
    if (modifier === 'arrivals' && image.new_arrival) return true
    if (modifier === 'sale' && image.sale_enabled) return true
    return false
  }

  numImagesPassing = () => {
    const { images } = this.props
    let count = 0
    images.forEach(image => {
      if (this.imageMatchesModifier(image)) count++
    })

    return count
  }
  render() {
    const { images, setEditorImageId, setDeleteId, modifier } = this.props
    const token = TokenServices.getJwt()
    const numPassing = this.numImagesPassing()
    return (
      <section className="generated-images">
        {images &&
          images.map(image => (
            <>
              {this.imageMatchesModifier(image) && <div className="img-container fade-in" key={image.url}>
                {token && (
                  <ImageEdit
                    id={image.id}
                    setEditorImageId={setEditorImageId}
                    setDeleteId={setDeleteId}
                  />
                )}
                <GenerateImageElement image={image} width="250" />
                <h2>{!!image.name && image.name}</h2>  
              </div>}
            </>
          ))}
        <FalseDisplacementImage num={numPassing} />
      </section>
    )
  }
}
