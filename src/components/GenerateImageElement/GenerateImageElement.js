import React from 'react'
import { Image, Transformation } from 'cloudinary-react'

export default function GenerateImageElement(pic) {
  return (
    <Image publicId={pic.pic.url} type='fetch' name={pic.pic.url}>
      <Transformation width='800' crop='scale' />
    </Image>
  )
}