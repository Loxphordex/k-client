import React from 'react'

// num: number of images
export default function FalseDisplacementImage({ num }) {
  // generates false images to properly offset the final images in the gallery
  let divisibleCounter = num
  while (divisibleCounter % 4 !== 0) {
    divisibleCounter++
    return (
      <>
        <section className="img-container" />
        <h2> </h2>
      </>
    )
  }
}
