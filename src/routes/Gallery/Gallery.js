import React from 'react'
import { CloudinaryContext } from 'cloudinary-react'
import config from '../../config'
import ApiServices from '../../services/api-services'
import TokenServices from '../../services/token-services'
import './Gallery.css'
// import './GalleryCard.css'

// COMPONENTS
import GenerateImages from '../../components/GenerateImages/GenerateImages'
import AuthFooter from '../../components/AuthFooter/AuthFooter'
import EditorForm from '../../components/EditorForm/EditorForm'
import DeleteForm from '../../components/DeleteForm/DeleteForm'

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
      editorImageDescription: '',
      editorImageType: '',
      editorImagePrice: null,
      small: null,
      medium: null,
      large: null,
      xLarge: null,
      xxLarge: null,

      deleteFormOpen: false,
      deleteImageId: null
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

  handleError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  getAndDisplayImages = () => {
    ApiServices.getImages()
      .then(allImages => this.setState({ allImages: allImages.images }))
      .then(() => this.setDisplayedImages())
      .then(() => this.clearError())
      .catch(e => this.handleError(e))
  }

  // EDITOR
  disableEditor = () => {
    this.setState({
      editorOpen: false,
      editorImageId: null,
      editorImageName: '',
      editorImageLink: '',
      editorImageDescription: '',
      editorImageType: '',
      editorImagePrice: null,
      small: null,
      medium: null,
      large: null,
      xLarge: null,
      xxLarge: null,
    })
  }

  setEditorImageId = id => {
    this.setState({
      editorOpen: true,
      editorImageId: id
    })
  }

  updateNewName = name => {
    this.setState({ editorImageName: name })
  }

  updateNewLink = link => {
    this.setState({ editorImageLink: link })
  }

  updateNewDescription = description => {
    this.setState({ editorImageDescription: description })
  }

  updateNewType = type => {
    this.setState({ editorImageType: type })
  }

  updateNewPrice = price => {
    this.setState({ editorImagePrice: price })
  }

  updateSmallCount = small => {
    this.setState({ small })
  }

  updateMediumCount = medium => {
    this.setState({ medium })
  }

  updateLargeCount = large => {
    this.setState({ large })
  }

  updateXLargeCount = xLarge => {
    this.setState({ xLarge })
  }

  updateXXLargeCount = xxLarge => {
    this.setState({  xxLarge })
  }

  handleSubmitEdit = event => {
    event.preventDefault()

    const updateData = {
      id: this.state.editorImageId,
      name: this.state.editorImageName,
      link: this.state.editorImageLink,
      description: this.state.editorImageDescription,
      type: this.state.editorImageType,
      price: this.state.editorImagePrice,
      small: this.state.small,
      medium: this.state.medium,
      large: this.state.large,
      xLarge: this.state.xLarge,
      xxLarge: this.state.xxLarge
    }
    ApiServices.updateImage(updateData)
      .then(() => this.disableEditor())
      .then(() => this.getAndDisplayImages())
      .catch(e => this.handleError(e))
  }

  // DELETE
  openDeleteForm = () => {
    this.setState({ deleteFormOpen: true })
  }

  closeDeleteForm = () => {
    this.setState({
      deleteFormOpen: false,
      deleteImageId: null
    })
  }

  setDeleteId = async id => {
    await this.setState({ deleteImageId: id })
    await this.openDeleteForm()
  }

  handleDelete = event => {
    event.preventDefault()

    const id = this.state.deleteImageId
    if (id) {
      ApiServices.deleteImage(id)
        .then(() => this.closeDeleteForm())
        .then(() => this.getAndDisplayImages())
        .catch(e => this.handleError(e))
    } else {
      console.log('Delete Failed, no ID')
    }
  }

  render() {
    const { history } = this.props
    const { images, editorOpen, deleteFormOpen } = this.state
    const token = TokenServices.getJwt()
    return (
      <section className="gallery-area">
        {editorOpen && (
          <EditorForm
            disableEditor={this.disableEditor}
            updateNewName={this.updateNewName}
            updateNewLink={this.updateNewLink}
            updateNewDescription={this.updateNewDescription}
            updateNewType={this.updateNewType}
            updateNewPrice={this.updateNewPrice}
            updateSmall={this.updateSmallCount}
            updateMedium={this.updateMediumCount}
            updateLarge={this.updateLargeCount}
            updateXLarge={this.updateXLargeCount}
            updateXXLarge={this.updateXXLargeCount}
            handleSubmitEdit={this.handleSubmitEdit}
          />
        )}

        {deleteFormOpen && (
          <DeleteForm closeDeleteForm={this.closeDeleteForm} handleDelete={this.handleDelete} />
        )}

        <CloudinaryContext cloudName={config.CLOUD_NAME} className="cloud-context">
          <GenerateImages
            images={images}
            setEditorImageId={this.setEditorImageId}
            setDeleteId={this.setDeleteId}
          />
        </CloudinaryContext>

        {token && <AuthFooter history={history} />}
      </section>
    )
  }
}
