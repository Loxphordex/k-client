import React from 'react'

// num: number of images
export default function FalseDisplacementImage({ num }) {
  // generates false images to properly offset the final images in the gallery

  // keep subtracting the images by 12 until you can't anymore
  // the remaining number will be the last row
  // depending on that number, return between 0 and 3 blank divs

  if (!num) return <></>

  let numberOfComponents = 0

  while (num - 12 >= 0) { // subtract until the remaining number is less than 12
    num -= 12
  }

  if (num === 0 || num === 4) return <></> // if no displacement is needed, return

  numberOfComponents = 4 - num // set the number of displacement components needed
  let outputComponents = []

  while (numberOfComponents > 0) {
    numberOfComponents--
    outputComponents.push(
      <div className="img-container">
        <h2></h2>
      </div>
    )
  }

  return outputComponents.map(i => i)
}
