import React from 'react'
import './ImageEdit.css'

export default class ImageEdit extends React.Component {
  render() {
    const { id, setEditorImageId, setDeleteId } = this.props
    return(
      <div className='edit-container'>
        <button 
          onClick={(event) => setEditorImageId(event.target.id)}
          className='rename-button' 
          id={id}>EDIT</button>
        <button 
          className='delete-button'
          id={id}
          onClick={(event) => setDeleteId(event.target.id)}>DELETE</button>
      </div>
    )
  }
}