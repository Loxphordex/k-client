import React from 'react'
import { Image, Transformation } from 'cloudinary-react'

export default function GenerateImageElement(pic) {
  return (
    <Image publicId={pic.url} type='fetch' name={pic.url}>
      <Transformation width='1000' crop='scale' />
    </Image>
  )
}