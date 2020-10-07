import React from 'react'
import { CloudinaryContext } from 'cloudinary-react'
import config from '../../config'
import ApiServices from '../../services/api-services'
import TokenServices from '../../services/token-services'
import './Gallery.css'

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
      editorImageLink: ''
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

  handleSubmitEdit = event => {
    event.preventDefault()

    const { editorImageId, editorImageName, editorImageLink } = this.state
    ApiServices.updateImage(editorImageId, editorImageName, editorImageLink)
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
