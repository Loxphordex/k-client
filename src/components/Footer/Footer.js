import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <section className="footer-container fade-in">
      <div className="social-link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/pearegrine_official/"
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
