import React from 'react'
import './AboutUs.css'
import '../Contact/Contact.css'

export default class Bio extends React.Component {
  render() {
    return(
      <section className='bio-container'>

        <h2>PEAREGRINE IN A FEW SLICES
          <span role='img' aria-label='pear'>&#127824;</span>
        </h2>
        <hr className='contact-hr about-hr' />
        <p>Every day we produce designs within a variety of lifestyle goods, 
          through independent manufacturing located in Seattle, WA, USA.
        </p>

        <h2>OUR MISSION
          <span role='img' aria-label='pear'>&#127824;</span>
        </h2>
        <hr className='contact-hr about-hr' />
        <p>TO BECOME THE WORLD'S TOP LIFESTYLE BRAND.</p>

        <h2>OUR BELIEF
          <span role='img' aria-label='pear'>&#127824;</span>
        </h2>
        <hr className='contact-hr about-hr' />
        <p>ART HAS THE POWER TO CHANGE THIS WORLD AND ANY 
          UNDISCOVERED AS OF YET WORLDS.
        </p>

        <h2>OUR CORE VALUES
          <span role='img' aria-label='pear'>&#127824;</span>
        </h2>
        <hr className='contact-hr about-hr' />
        <p>QUALITY, INNOVATIVE GOODS, CUSTOMER BLISS.</p>

        <h2>FOUNDER
          <span role='img' aria-label='pear'>&#127824;</span>
        </h2>
        <hr className='contact-hr about-hr' />
        <p>KEEGAN HOLCOMB-HARRIS</p>
      </section>
    )
  }
}