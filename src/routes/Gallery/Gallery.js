import React from 'react'
import config from '../../config'
import { CloudinaryContext } from 'cloudinary-react'

// COMPONENTS
import GenerateImages from '../../components/GenerateImages/GenerateImages'

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 1,
      images: [],
      allImages: [],
    }
  }

  render() {
    const { images } = this.state
    return(
      <section className='gallery-area'>
        <CloudinaryContext cloudName={config.CLOUD_NAME} className='cloud-context'>
          <GenerateImages images={images} />
        </CloudinaryContext>
      </section>
    )
  }
}