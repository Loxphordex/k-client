import React from 'react'
import config from '../../config'
import { CloudinaryContext } from 'cloudinary-react'
import ApiServices from '../../services/api-services'
import './Gallery.css'

// COMPONENTS
import GenerateImages from '../../components/GenerateImages/GenerateImages'

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      index: 1,
      images: [],
      allImages: [],
      imagesPerPage: 12,
    }
  }

  componentDidMount = () => {
    ApiServices.getImages()
      .then((allImages) => this.setState({ allImages: allImages.images }))
      .then(() => this.setDisplayedImages())
      .then(() => this.clearError())
      .catch((e) => this.handleError(e))
  }

  setDisplayedImages = () => {
    const { index, allImages, imagesPerPage } = this.state
    const imagesDisplayed = index * imagesPerPage
    const images = allImages.slice(imagesDisplayed - imagesPerPage, imagesDisplayed)
    this.setState({ images })
  }

  handleError = (error) => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
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