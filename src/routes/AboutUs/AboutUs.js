import React from 'react'
import './AboutUs.css'
import '../Contact/Contact.css'

export default class Bio extends React.Component {
  render() {
    return (
      <section className="bio-container">
        <h3>
          Pearegrine in a Few Slices
          <span role="img" aria-label="pear">
            &#127824;
          </span>
        </h3>
        <hr className="contact-hr about-hr" />
        <p>
          Every day we produce designs within a variety of lifestyle goods, through independent
          manufacturing located in Seattle, WA, USA.
        </p>

        <h3>
          Our Mission
          <span role="img" aria-label="pear">
            &#127824;
          </span>
        </h3>
        <hr className="contact-hr about-hr" />
        <p>To become the world's top lifestyle brand.</p>

        <h3>
          Our Belief
          <span role="img" aria-label="pear">
            &#127824;
          </span>
        </h3>
        <hr className="contact-hr about-hr" />
        <p>Art has the power to change this world and any undiscovered as of yet worlds.</p>

        <h3>
          Our Core Values
          <span role="img" aria-label="pear">
            &#127824;
          </span>
        </h3>
        <hr className="contact-hr about-hr" />
        <p>Quality. Innovative goods. Customer bliss.</p>

        <h3>
          Founder
          <span role="img" aria-label="pear">
            &#127824;
          </span>
        </h3>
        <hr className="contact-hr about-hr" />
        <p>Keegan Holcomb-Harris</p>
      </section>
    )
  }
}
