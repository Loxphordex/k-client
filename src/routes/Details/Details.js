import React from 'react'
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
      selectedSize: null,
      error: null
    }
  }

  componentDidMount() {
    if (this.props && this.props.location && this.props.location.state) {
      const { image } = this.props.location.state
      this.setState({ image })
    }
  }

  componentWillUnmount() {
    this.setState({ selectedSize: null })
  }

  checkSizeAvailable = size => {
    if (!this.state.image.availableSizes[size.toLowerCase()]) return 'no-size'
    return String()
  }

  checkSizeSelected = size => {
    if (this.state.selectedSize === size) return 'selected-size'
    return String()
  }

  selectSize = size => {
    this.setState({ selectedSize: size })
  }

  handleError = (error) => {
    if (error !== undefined) {
      this.setState({ error })
      setTimeout(() => {
        this.setState({ error: null })
      }, 10000);
    }
  }

  renderSizeSelection = () => {
    let sizesJsx = []
    for (const [key, value] of Object.entries(sizes)) {
      sizesJsx.push(
        <button
          key={key}
          onClick={() => this.selectSize(key)}
          className={`size-selection size-${key} ${this.checkSizeAvailable(
            key
          )}${this.checkSizeSelected(key)}`}
        >
          {value}
        </button>
      )
    }

    return sizesJsx.map(t => t)
  }

  render() {
    const { image, selectedSize, error } = this.state
    const { cart, setCart } = this.props

    if (image) {
      return (
        <div className="details-container">
          <div className="cloud-context">
            <div className="details-main">
              <DetailsImage pic={image} />
              <div className="details-info-container fade-in">
                <h3 className="secondary-text details-type-header">
                  {image.type ? image.type : String()}
                </h3>
                <h2 className="main-secondary-header details-main-header">
                  {image.name}
                </h2>
                <p className="details-main-desc">
                  {image.description ? image.description : String()}
                </p>
                <div className="details-price">
                  {image.price ? `$${image.price}` : String()}
                </div>
                <section className="details-size-container">
                  {this.renderSizeSelection()}
                  {error && (
                    <ErrorAlert
                      errorMessage={error.message}
                      handleError={this.handleError}
                    />
                  )}
                </section>
                <AddToCart
                  image={image}
                  cart={cart}
                  handleError={this.handleError}
                  setCart={setCart}
                  selectedSize={selectedSize}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }

    return <></>
  }
}
