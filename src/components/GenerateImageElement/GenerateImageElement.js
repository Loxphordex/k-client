import React from 'react'
import { Image, Transformation } from 'cloudinary-react'
import { Link } from 'react-router-dom'

export default class GenerateImageElement extends React.Component {
  render() {
    const { image, width } = this.props
    return (
      <>
        {image && width && (
          <Link
            to={{
              pathname: '/details',
              search: `?id=${image.id}`,
              state: { image }
            }}
          >
            <Image publicId={image.url} type="fetch" name={image.url} className="fade-in">
              <Transformation quality="90" width={width} crop="scale" fetchFormat="auto" />
            </Image>
          </Link>
        )}
      </>
    )
  }
}
