import React from 'react'
import { CloudinaryContext } from 'cloudinary-react'
import config from '../../config'
import DetailsImage from '../../components/DetailsImage/DetailsImage'
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
    if (!this.state.image[size]) return 'no-size'
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
                  <button className={`size-selection size-small`}>S</button>
                  <button className={`size-selection size-medium`}>M</button>
                  <button className={`size-selection size-large`}>L</button>
                  <button className={`size-selection size-xLarge`}>XL</button>
                  <button className={`size-selection size-xxLarge`}>XXL</button>
                </section>
              </div>
            </div>
          </CloudinaryContext>
        </div>
      )
    }

    return <></>
  }
}
