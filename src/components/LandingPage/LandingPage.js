import React from 'react'
import photo from '../../images/ny_light.jpg'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className="landing-page-image-container">
      <img className="landing-page-image" src={photo} alt="New York city in the daytime" />
    </div>
  )
}