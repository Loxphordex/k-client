import React from 'react'
import { CloudinaryContext } from 'cloudinary-react'
import config from '../../config'
import GenerateImageElement from '../../components/GenerateImageElement/GenerateImageElement'

// props?.location?.state?.image
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

    return (
      <div>
        {image && (
          <CloudinaryContext cloudName={config.CLOUD_NAME} className="cloud-context">
            <GenerateImageElement pic={image} width="400" />
          </CloudinaryContext>
        )}
      </div>
    )
  }
}
