import React from 'react'
import ApiServices from '../../services/api-services'
import TokenServices from '../../services/token-services'
import GenerateImages from '../../components/GenerateImages/GenerateImages'
import AuthFooter from '../../components/AuthFooter/AuthFooter'
import EditorForm from '../../components/EditorForm/EditorForm'
import DeleteForm from '../../components/DeleteForm/DeleteForm'
import { Link } from 'react-router-dom'
import { SmileyXEyes } from 'phosphor-react'
import './Gallery.css'

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      index: 1,
      pages: 1,
      images: [],
      allImagesWithModifier: [],
      allImages: [],
      imagesPerPage: 12,
      modifier: '',

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

  componentDidUpdate = () => {
    window.scrollTo(0, 0)
    this.displayImages()
    this.setNumberOfPages()
    const { match } = this.props
    const mod = match.params.modifier
    const { modifier } = this.state

    if (mod !== modifier) {
      this.setState({ modifier: mod }, this.setDisplayedImages)
    }
  }

  displayImages = () => {
    const { index } = this.state
    const params = new URLSearchParams(window.location.search)
    if (params) {
      const currentPage = params.get('page')
      if (currentPage != index) {
        this.setCurrentPage(this.setDisplayedImages)
      }
    }
  }

  setNumberOfPages = () => {
    const { allImages, allImagesWithModifier, imagesPerPage, pages } = this.state
    if (allImages && imagesPerPage) {
      let maxPages = 1
      let count
      if (allImagesWithModifier.length > 0) {
        count = allImagesWithModifier.length
      } 
      else {
        count = allImages.length
      }

      while (count > imagesPerPage) {
        maxPages++
        count = count - imagesPerPage
      }

      if (pages !== maxPages) {
        this.setState({ pages: maxPages })
      }

    } else {
      if (pages !== 1) {
        this.setState({ pages: 1 })
      }
    }
  }

  setCurrentPage = (displayCallback = null) => {
    const params = new URLSearchParams(window.location.search)
    if (params) {
      const currentPage = params.get('page')
      if (currentPage) {
        this.setState({ index: params.get('page') }, displayCallback)
      } else {
        params.set('page', 1)
        history.pushState(null, null, '?' + params.toString())
      }
    } else {
      params.set('page', 1)
      history.pushState(null, null, '?' + params.toString())
    }
  }

  setDisplayedImages = () => {
    const { index, allImages, imagesPerPage } = this.state
    const { setImages } = this.props
    const imagesDisplayed = index * imagesPerPage
    let imageStateProperty = this.imagePropertyBasedOnModifier()
    let images
    if (imageStateProperty) {
      let allImagesWithModifier
      if (imageStateProperty.category) {
        allImagesWithModifier = allImages.filter(i => i.category === imageStateProperty.category)
      }
      else {
        allImagesWithModifier = allImages.filter(i => !!i[imageStateProperty.property])
      }

      this.setState({ allImagesWithModifier })
      images = allImagesWithModifier.slice(imagesDisplayed - imagesPerPage, imagesDisplayed)
    }
    else {
      images = allImages.slice(imagesDisplayed - imagesPerPage, imagesDisplayed)
      this.setState({ allImagesWithModifier: [] })
    }

    this.setState({ images })
    setImages(allImages)
  }

  imagePropertyBasedOnModifier = () => {
    const { modifier } = this.state
    if (modifier && modifier !== 'all') {
      let imageProp = {}
      if (modifier === 'sale') imageProp.property = 'sale_enabled'
      if (modifier === 'arrivals') imageProp.property = 'new_arrival'
      if (modifier === 'shirts') imageProp.category = 'shirt'
      if (modifier === 'sweatshirts') imageProp.category = 'sweatshirt'
      if (modifier === 'jeans') imageProp.category = 'jeans'
      if (modifier === 'hats') imageProp.category = 'hat'

      return imageProp
    }
  }

  getAndDisplayImages = (fetchImages = ApiServices.getImages) => {
    fetchImages()
      .then(allImages => this.setState({ allImages: allImages.mappedImages }))
      .then(() => this.setCurrentPage())
      .then(() => this.setDisplayedImages())
      .then(() => this.setNumberOfPages())
      .then(() => this.clearError())
      .catch(e => this.handleError(e))
  }

  handleError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
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

  getNextPage = (numToChange) => {
    const currentUrl = window.location.pathname
    const params = new URLSearchParams(window.location.search)
    if (params) {
      const currentPage = parseInt(params.get('page'), 10)
      if (currentPage) {
        const { pages } = this.state
        const nextPage = currentPage + numToChange
        if (nextPage !== 0 && nextPage <= pages) {
          const newParams = params.toString().replace(`page=${currentPage}`, `page=${nextPage}`)
          const newUrl = `${currentUrl}?${newParams}`
          return newUrl
        }
      }
    }

    return currentUrl
  }

  pageHasContent = () => {
    const { images, allImagesWithModifier } = this.state
    if (images && images.length > 0) return true
    if (allImagesWithModifier && allImagesWithModifier.length > 0) return true
    return false
  }

  render() {
    const { history } = this.props
    const {
      images,
      allImages,
      editorOpen,
      deleteFormOpen,
      index,
      pages,
      modifier,
      editorImageId } = this.state
    const token = TokenServices.getJwt()
    return (
      <>
        {this.pageHasContent() && <section className={`gallery-area ${editorOpen ? 'no-scroll' : String()}`} id='gallery-area'>
          {editorOpen && (
            <EditorForm
              images={images}
              editorImageId={editorImageId}
              editorOpen={editorOpen}
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
  
          <div className="cloud-context">
            <GenerateImages
              images={images}
              setEditorImageId={this.setEditorImageId}
              setDeleteId={this.setDeleteId}
              modifier={modifier}
            />
          </div>
  
          <div className="page-container">
            {index > 1 && 
              <Link to={this.getNextPage(-1)} className="page-control control-previous">
                <button className="page-control control-previous">Prev</button>
              </Link>
            }
            {index < pages && 
              <Link to={this.getNextPage(1)} className="page-control control-next">
                <button className="page-control control-next">Next</button>
              </Link>
            }
          </div>
  
          {token && <AuthFooter history={history} />}
        </section>}
        {!this.pageHasContent() && allImages && allImages.length > 0 && <section className='gallery-no-content'>
            <h3>
              <SmileyXEyes size={48} />
              <SmileyXEyes size={48} />
              <SmileyXEyes size={48} />
            </h3>
          </section>}
        {!allImages || allImages.length === 0 && <section className='gallery-preloader'>
            <h3>
              Loading...
            </h3>
          </section>}
      </>
    )
  }
}
