import React from 'react'
import './Contact.css'

export default class Contact extends React.Component {
  render() {
    return(
      <section className='contact-container'>
        <h2 className='contact-header'>Contact</h2>
        <hr className='contact-hr' />
        <h3 className='contact-sub-head'>Business Inquiry</h3>
        <a className='bus-inc' target='_blank' rel='noopener noreferrer' 
          href='mailto: pearegrineofficial@outlook.com'>pearegrineofficial@outlook.com</a>
        <a className='bus-inc' target='_blank' rel='noopener noreferrer' 
          href='mailto: keeganholcombharris@outlook.com'>keeganholcombharris@outlook.com</a>
        <hr className='contact-hr' />
        <h3 className='contact-sub-head'>Social Media</h3>
        <div className='social-link'>
          <i class="fab fa-instagram"></i>
          <a target='_blank' rel='noopener noreferrer' 
            href='https://www.instagram.com/pearegrineofficial/'>Instagram</a>
        </div>
        <div className='social-link'>
          <i class="fab fa-twitter"></i>
          <a target='_blank' rel='noopener noreferrer' 
            href='https://www.twitter.com/pearegrine'>Twitter</a>
        </div>
      </section>
    )
  }
}