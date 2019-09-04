import React from 'react'
import config from '../../config'
import { CloudinaryContext } from 'cloudinary-react'
import ApiServices from '../../services/api-services'
import TokenServices from '../../services/token-services'
import './Gallery.css'

// COMPONENTS
import GenerateImages from '../../components/GenerateImages/GenerateImages'
import AuthFooter from '../../components/AuthFooter/AuthFooter'
import EditorForm from '../../components/EditorForm/EditorForm'

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      index: 1,
      images: [],
      allImages: [],
      imagesPerPage: 12,

      editorImageId: null,
      editorOpen: false,
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

  // EDITOR
  setEditorImageId = (id) => {
    this.setState({ 
      editorImageId: id,
      editorOpen: true,
    })
  }

  disableEditor = () => {
    this.setState({
      editorImageId: null,
      editorOpen: false,
    })
  }

  render() {
    const { history } = this.props
    const { images, editorOpen } = this.state
    const token = TokenServices.getJwt()
    return(
      <section className='gallery-area'>

        { editorOpen && <EditorForm disableEditor={this.disableEditor} /> }

        <CloudinaryContext cloudName={config.CLOUD_NAME} className='cloud-context'>
          <GenerateImages 
            images={images} 
            setEditorImageId={this.setEditorImageId} />
        </CloudinaryContext>

        { token &&  <AuthFooter history={history} />}
      </section>
    )
  }
}