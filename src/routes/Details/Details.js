import React from 'react'
import { CloudinaryContext } from 'cloudinary-react'
import config from '../../config'
import DetailsImage from '../../components/DetailsImage/DetailsImage'
import { sizes } from '../../constants/sizes'
import './Details.css'

export default class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null
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

  checkSizeAvailable = size => {
    if (!this.state.image[size.toLowerCase()]) return 'no-size'
    return String()
  }

  render() {
    const { image } = this.state

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
                </section>
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
        <button className={`size-selection size-${key} ${this.checkSizeAvailable(key)}`}>
          {value}
        </button>
      )
    }
    
    return sizesJsx.map(t => t)
  }
}
