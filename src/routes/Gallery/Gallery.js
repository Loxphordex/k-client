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

      editorOpen: false,
      editorImageId: null,
      editorImageName: '',
      editorImageLink: '',
    }
  }

  componentDidMount = () => {
    this.getAndDisplayImages()
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

  getAndDisplayImages = () => {
    ApiServices.getImages()
      .then((allImages) => this.setState({ allImages: allImages.images }))
      .then(() => this.setDisplayedImages())
      .then(() => this.clearError())
      .catch((e) => this.handleError(e))
  }

  // EDITOR
  disableEditor = () => {
    this.setState({
      editorOpen: false,
      editorImageId: null,
      editorImageName: '',
      editorImageLink: '',
    })
  }

  setEditorImageId = (id) => {
    this.setState({ 
      editorOpen: true,
      editorImageId: id,
    })
  }

  updateNewName = (name) => {
    this.setState({ editorImageName: name })
  }

  updateNewLink = (link) => {
    this.setState({ editorImageLink: link })
  }

  handleSubmitEdit = (event) => {
    event.preventDefault()

    const { editorImageId, editorImageName, editorImageLink } = this.state
    ApiServices.updateImage(editorImageId, editorImageName, editorImageLink)
      .then(() => this.disableEditor())
      .then(() => this.getAndDisplayImages())
      .catch((e) => this.handleError(e))
  }

  render() {
    const { history } = this.props
    const { images, editorOpen } = this.state
    const token = TokenServices.getJwt()
    return(
      <section className='gallery-area'>

        { editorOpen && 
        <EditorForm 
          disableEditor={this.disableEditor}
          updateNewName={this.updateNewName}
          updateNewLink={this.updateNewLink}
          handleSubmitEdit={this.handleSubmitEdit} /> }

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