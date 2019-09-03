import React from 'react'
import './ImageEdit.css'

export default class ImageEdit extends React.Component {
  render() {
    return(
      <div className='edit-container'>
        <button className='rename-button'>RENAME</button>
        <button className='delete-button'>DELETE</button>
      </div>
    )
  }
}