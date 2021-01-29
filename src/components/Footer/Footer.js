import React from 'react'
import './Footer.css'
import ApiServices from '../../services/api-services'
import TokenServices from '../../services/token-services'

export default function Footer() {
  const token = TokenServices.getJwt()

  function testEmail() {
    ApiServices.postTestEmail()
      .then(res => console.log(res))
      .catch(er => console.log(er))
  }
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
      {token && <div onClick={testEmail}>Test Email</div>}
    </section>
  )
}
