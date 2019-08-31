import React from 'react'
import config from '../../config'

export default class CloudinaryWidget extends React.Component {
  checkUploadResult = (resultEvent) => {
    if (resultEvent.event === 'success') {
      console.log(resultEvent.info.url)
    }
  }

  showWidget = (widget) => {
    widget.open()
  }
  render() {
    let widget = window.cloudinary.createUploadWidget({
      cloudName: config.CLOUD_NAME,
      uploadPreset: 'ufhbnsnq' },
      (error, result) => { this.checkUploadResult(result) }
    )
    return(
      <div className='cloud-button'>
        <button onClick={() => this.showWidget(widget)}>ADD IMAGE</button>
      </div>
    )
  }
}