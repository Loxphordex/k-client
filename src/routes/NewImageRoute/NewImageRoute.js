import React from 'react'
import CloudinaryWidget from '../../components/CloudinaryWidget/CloudinaryWidget'
import ApiServices from '../../services/api-services'

export default class NewImageRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      url: '',
      name: '',
      link: '',
    }
  }

  setImageUrl = (url) => {
    this.setState({ url })
  }

  setImageName = (name) => {
    this.setState({ name })
  }

  setImageLink = (link) => {
    this.setState({ link })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { url, name, link } = this.state
    const newImage = { url, name, link }

    if (!url) {
      this.setState({ error: 'Image not selected' })
      return
    }

    ApiServices.postImage(newImage)
      .then(() => {
        this.setState({
          error: null,
          url: '',
          name: '',
          link: '',
        })
      })
      .catch(e => this.setState({ error: e }))
  }

  render() {
    return(
      <section className='new-image-area'>
        <fieldset>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <label htmlFor='imageName'>NAME</label>
            <input 
              type='text'
              name='imageName'
              id='imageName'
              onChange={(event) => this.setImageName(event.target.value)}
              placeholder='OPTIONAL'
            />
            <label htmlFor='imageLink'>STORE LINK</label>
            <input 
              type='text'
              name='imageLink'
              id='imageLink'
              onChange={(event) => this.setImageLink(event.target.link)}
              placeholder='OPTIONAL'
            />
            <button type='submit'>SUBMIT</button>
          </form>
          <CloudinaryWidget setImageUrl={this.setImageUrl} />
        </fieldset>
      </section>
    )
  }
}