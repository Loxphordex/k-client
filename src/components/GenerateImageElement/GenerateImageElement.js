import React from 'react'
import { Image, Transformation } from 'cloudinary-react'
import { Link } from 'react-router-dom'

export default class GenerateImageElement extends React.Component {
  render() {
    const { pic, width } = this.props
    return (
      <>
        {pic && width && (
          <Link
            to={{
              pathname: '/details',
              search: `?id=${pic.id}`,
              state: { image: pic }
            }}
          >
            <Image publicId={pic.url} type="fetch" name={pic.url}>
              <Transformation quality="90" width={width} crop="scale" fetchFormat="auto" />
            </Image>
          </Link>
        )}
      </>
    )
  }
}
