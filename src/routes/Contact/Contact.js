import React from 'react'
import './Contact.css'

export default class Contact extends React.Component {
  render() {
    return(
      <section className='contact-container'>
        <h2 className='contact-header'>Contact</h2>
        <hr className='contact-hr' />
        <h3>Business Inquiry</h3>
        <a href='mailto: pearegrineofficial@outlook.com'>pearegrineofficial@outlook.com</a>
        <a href='mailto: keeganholcombharris@outlook.com'>keeganholcombharris@outlook.com</a>
        <hr className='contact-hr' />
        <h3>Social Media</h3>
        <a target='_blank' rel='noopener noreferrer' 
          href='https://www.instagram.com/pearegrineofficial/'>Instagram</a>
      </section>
    )
  }
}