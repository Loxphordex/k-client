import React from 'react'
import { Image, Transformation } from 'cloudinary-react'

export default class GenerateImageElement extends React.Component {
  render() {
    const { pic } = this.props
    return (
      <Image publicId={pic.url} type='fetch' name={pic.url}>
        <Transformation width='800' crop='scale' />
      </Image>
    )
  }
}