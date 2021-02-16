import React from 'react'
import { Image, Transformation } from 'cloudinary-react'

export default class DisplayImage extends React.Component {
  render() {
    const { pic } = this.props

    if (pic) {
      const jpgUrl = pic.url.slice(0, pic.url.length - 3) + 'jpg'
      return (
        <div className='details-image'>
          <Image publicId={jpgUrl} type='fetch' name={pic.url} className='fade-in'>
            <Transformation quality='auto' width='400' fetchFormat='auto' flags='lossy' />
          </Image>
        </div>
      )
    }

    return <></>
  }
}
