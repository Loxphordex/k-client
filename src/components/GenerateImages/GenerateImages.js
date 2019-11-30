import React from 'react'
import TokenServices from '../../services/token-services'
import GenerateImageElement from '../GenerateImageElement/GenerateImageElement'
import ImageEdit from '../../components/ImageEdit/ImageEdit'

export default class GenerateImages extends React.Component {
  render() {
    const { images, setEditorImageId, setDeleteId } = this.props
    const token = TokenServices.getJwt()
    return(
      <section className='generated-images'>
        { images && images.map(image => {
          return(
            <div className='img-container' key={image.url}>
              { token && 
              <ImageEdit 
                id={image.id} 
                setEditorImageId={setEditorImageId}
                setDeleteId={setDeleteId}
              /> }
              <GenerateImageElement pic={image} />
              <h2>{!!image.name && image.name}</h2>
            </div>
          )
        })}
      </section>
    )
  }
}