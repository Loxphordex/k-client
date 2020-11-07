import React from 'react'
import { CloudinaryContext } from 'cloudinary-react'
import config from '../../config'
import AddToCart from '../../components/AddToCart/AddToCart'
import DetailsImage from '../../components/DetailsImage/DetailsImage'
import ErrorAlert from '../../components/Error/ErrorAlert'
import { sizes } from '../../constants/sizes'
import './Details.css'

export default class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
      selectedSize: null    
    }
  }

  componentDidMount() {
    if (this.props && this.props.location && this.props.location.state) {
      const { image } = this.props.location.state
      this.setState({
        image
      })
    }
  }

  componentWillUnmount() {
    this.setState({ selectedSize: null })
  }

  checkSizeAvailable = size => {
    if (!this.state.image[size.toLowerCase()]) return 'no-size'
    return String()
  }

  checkSizeSelected = size => {
    if (this.state.selectedSize === size) return 'selected-size'
    return String()
  }

  selectSize = size => {
    this.setState({ selectedSize: size })
  }

  addCart = () => {
    const { image } = this.state
    const { cart, handleError, handleImage } = this.props

    if (image && cart && handleError && handleImage) {
      const availableProducts = image[image.size.toLowerCase()]
      const imageObject = {
        count: 1,
        details: image
      }

      if (cart[image.name] && cart[image.name][image.size]) {
        imageObject.count = cart[image.name][image.size].count + 1
        if (imageObject.count > availableProducts) {
          handleError({
            type: "cart-unavailable",
            message: "No additional sizes are available"
          })
          return
        }
      }

      handleError(null)
      handleImage(image, imageObject)
    }
  }

  render() {
    const { image, selectedSize } = this.state
    const { cart, handleError, error } = this.props

    if (image) {
      return (
        <div className="details-container">
          <CloudinaryContext cloudName={config.CLOUD_NAME} className="cloud-context">
            <div className="details-main">
              <DetailsImage pic={image} />
              <div className="details-info-container fade-in">
                <h3 className="secondary-text details-type-header">{image.type ? image.type : String()}</h3>
                <h2 className="main-secondary-header details-main-header">{image.name}</h2>
                <div className="details-price">{image.price ? `$${image.price}` : String()}</div>
                <p className="details-main-desc">
                  {image.description ? image.description : String()}
                </p>
                <section className="details-size-container">
                  {this.renderSizeSelection()}
                  {error && <ErrorAlert errorMessage={error.message} handleError={handleError} />}
                </section>
                <AddToCart
                  cart={cart}
                  image={image}
                  addCart={this.addCart}
                  selectedSize={selectedSize} />
              </div>
            </div>
          </CloudinaryContext>
        </div>
      )
    }

    return <></>
  }

  renderSizeSelection = () => {
    let sizesJsx = []
    for (const [key, value] of Object.entries(sizes)) {
      sizesJsx.push(
        <button
          key={key}
          onClick={() => this.selectSize(key)}
          className={`size-selection size-${key} ${this.checkSizeAvailable(key)}${this.checkSizeSelected(key)}`}>
          {value}
        </button>
      )
    }
    
    return sizesJsx.map(t => t)
  }
}
