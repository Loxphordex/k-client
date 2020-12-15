import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <section className="footer-container">
      <div className="social-link">
        {/* <i className="fab fa-twitter" /> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/pearegrine"
        >
          Twitter
        </a>
      </div>
      <div className="social-link">
        {/* <i className="fab fa-instagram" /> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/pearegrineofficial/"
        >
          Instagram
        </a>
      </div>
      <div className="social-link">
        <a
          className="bus-inc"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: pearegrineofficial@outlook.com"
        >
          pearegrineofficial@outlook.com
        </a>
      </div>
      <div className="social-link">
        <a
          className="bus-inc"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: keeganholcombharris@outlook.com"
        >
          keeganholcombharris@outlook.com
        </a>
      </div>
    </section>
  )
}
