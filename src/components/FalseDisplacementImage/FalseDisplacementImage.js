import React from 'react'

// num: number of images
export default function FalseDisplaceMentImage({ num }) {
  // generates false images
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
