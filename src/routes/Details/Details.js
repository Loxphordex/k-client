import React from 'react'
import { CloudinaryContext } from 'cloudinary-react'
import config from '../../config'
import DetailsImage from '../../components/DetailsImage/DetailsImage'
import './Details.css'

export default class Details extends React.Component {
  state = {
    image: null
  }

  componentDidMount() {
    if (this.props && this.props.location && this.props.location.state) {
      const { image } = this.props.location.state
      this.setState({
        image
      })
    }
  }

  render() {
    const { image } = this.state

    if (image) {
      return (
        <div className="details-container">
          <CloudinaryContext cloudName={config.CLOUD_NAME} className="cloud-context">
            <div className="details-main">
              <DetailsImage pic={image} />
              <div className="details-info-container">
                <h3 className="secondary-text details-type-header">{image.type ? image.type : String()}</h3>
                <h2 className="main-secondary-header details-main-header">{image.name}</h2>
                <p className="details-main-desc">
                  {image.description ? image.description : String()}
                </p>
              </div>
            </div>
          </CloudinaryContext>
        </div>
      )
    }

    return <></>
  }
}
