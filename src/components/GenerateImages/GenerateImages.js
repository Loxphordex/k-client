import React from 'react'
import TokenServices from '../../services/token-services'
import GenerateImageElement from '../GenerateImageElement/GenerateImageElement'
import FalseDisplacementImage from '../FalseDisplacementImage/FalseDisplacementImage'
import ImageEdit from '../ImageEdit/ImageEdit'

export default class GenerateImages extends React.Component {
  render() {
    const { images, setEditorImageId, setDeleteId } = this.props
    const token = TokenServices.getJwt()
    return (
      <section className="generated-images">
        {images &&
          images.map(image => (
            <div className="img-container fade-in" key={image.url}>
              {token && (
                <ImageEdit
                  id={image.id}
                  setEditorImageId={setEditorImageId}
                  setDeleteId={setDeleteId}
                />
              )}
              <GenerateImageElement image={image} width="250" />
              <h2>{!!image.name && image.name}</h2>
            </div>
          ))}
        <FalseDisplacementImage num={images.length} />
      </section>
    )
  }
}
