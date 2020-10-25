import React from 'react'
import { Image, Transformation } from 'cloudinary-react'

export default class DisplayImage extends React.Component {
  render() {
    const { pic } = this.props

    if (pic) {
      return (
        <div className="details-image">
          <Image publicId={pic.url} type="fetch" name={pic.url} className="fade-in">
            <Transformation quality="90" width="400" fetchFormat="auto" />
          </Image>
        </div>
      )
    }

    return <></>
  }
}
