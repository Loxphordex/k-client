import React from 'react'

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
        <p className="main-paragraph">
          Every day we produce designs within a variety of lifestyle goods, through independent
          manufacturing located in Brooklyn, NY, USA.
        </p>

        <h3>
          Our Mission
          <span role="img" aria-label="pear">
            &#127824;
          </span>
        </h3>
        <hr className="contact-hr about-hr" />
        <p className="main-paragraph">To become the world's top lifestyle brand.</p>

        <h3>
          Our Belief
          <span role="img" aria-label="pear">
            &#127824;
          </span>
        </h3>
        <hr className="contact-hr about-hr" />
        <p className="main-paragraph">Art has the power to change this world and any undiscovered as of yet worlds.</p>

        <h3>
          Our Core Values
          <span role="img" aria-label="pear">
            &#127824;
          </span>
        </h3>
        <hr className="contact-hr about-hr" />
        <p className="main-paragraph">Quality. Innovative goods. Customer bliss.</p>

        <h3>
          Founder
          <span role="img" aria-label="pear">
            &#127824;
          </span>
        </h3>
        <hr className="contact-hr about-hr" />
        <p className="main-paragraph">Keegan Holcomb-Harris</p>
      </section>
    )
  }
}
