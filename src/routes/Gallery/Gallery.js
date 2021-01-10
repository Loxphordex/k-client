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
      pages: 1,
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
      editorImageCategory: null,
      editorImageSalePrice: null,
      editorImageNewArrival: null,
      editorImageSaleEnabled: null,
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
    const { setImages } = this.props
    const imagesDisplayed = index * imagesPerPage
    const images = allImages.slice(imagesDisplayed - imagesPerPage, imagesDisplayed)
    this.setState({ images })
    setImages(allImages)
  }

  handleError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  getAndDisplayImages = () => {
    ApiServices.getImages()
      .then(allImages => this.setState({ allImages: allImages.mappedImages }))
      .then(() => this.setNumberOfPages())
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
      editorImageCategory: null,
      editorImageSalePrice: null,
      editorImageSaleEnabled: null,
      editorImageNewArrival: null,
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

  updateNewPrice = price => {
    this.setState({ editorImagePrice: price })
  }

  updateCategory = category => {
    this.setState({ editorImageCategory: category })
  }

  updateSalePrice = salePrice => {
    this.setState({ editorImageSalePrice: salePrice})
  }

  updateNewArrival = () => {
    this.setState({ editorImageNewArrival: !this.state.editorImageNewArrival })
  }

  updateSaleEnabled = () => {
    this.setState({ editorImageSaleEnabled: !this.state.editorImageSaleEnabled })
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
      category: this.state.editorImageCategory,
      newArrival: this.state.editorImageNewArrival,
      salePrice: this.state.editorImageSalePrice,
      saleEnabled: this.state.editorImageSaleEnabled,
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

  setNumberOfPages = () => {
    const { allImages, imagesPerPage } = this.state
    if (allImages && imagesPerPage) {
      let maxPages = 0
      let count = allImages.length

      while (count > imagesPerPage) {
        maxPages++
        count = count - imagesPerPage
      }

      this.setState({ pages: maxPages })
    } else {
      this.setState({ pages: 1 })
    }
  }

  switchPage = (numToChange) => {
    const { index } = this.state
  
    if (index <= 0) this.setState({ index: 1 })
    if (numToChange < 0 && index === 1) return
  
    this.setState({
      index: this.state.index + numToChange
    }, this.setDisplayedImages)
  }

  render() {
    const { history } = this.props
    const {
      images,
      editorOpen,
      deleteFormOpen,
      index,
      pages } = this.state
    const token = TokenServices.getJwt()
    return (
      <section className={`gallery-area ${editorOpen ? 'no-scroll' : String()}`}>
        {editorOpen && (
          <EditorForm
            disableEditor={this.disableEditor}
            updateNewName={this.updateNewName}
            updateNewLink={this.updateNewLink}
            updateNewDescription={this.updateNewDescription}
            updateNewPrice={this.updateNewPrice}
            updateCategory={this.updateCategory}
            updateNewArrival={this.updateNewArrival}
            updateSalePrice={this.updateSalePrice}
            updateSaleEnabled={this.updateSaleEnabled}
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

        <div className="page-container">
          {index > 1 && <button onClick={() => this.switchPage(-1)} className="page-control control-previous">Prev</button>}
          {pages >= index && <button onClick={() => this.switchPage(1)} className="page-control control-next">Next</button>}
        </div>

        {token && <AuthFooter history={history} />}
      </section>
    )
  }
}
