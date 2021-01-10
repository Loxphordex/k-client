import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <section className="footer-container">
      <div className="social-link">
        {/* <i className="fab fa-instagram" /> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/pearegrine_nyc/"
        >
          Instagram
        </a>
      </div>
      <div className="social-link">
        <a
          className="bus-inc"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: pearegrinenyc@outlook.com"
        >
          Email
        </a>
      </div>
    </section>
  )
}
