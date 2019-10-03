import React from 'react'
import { Image, Transformation } from 'cloudinary-react'

export default class GenerateImageElement extends React.Component {
  render() {
    const { pic } = this.props
    return (
      <Image publicId={pic.url} type='fetch' name={pic.url}>
        <Transformation quality='50' width='250' crop='scale' />
      </Image>
    )
  }
}