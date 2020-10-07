import React from 'react'
import config from '../../config'

export default class CloudinaryWidget extends React.Component {
  checkUploadResult = resultEvent => {
    const { setImageUrl } = this.props
    if (resultEvent.event === 'success') {
      setImageUrl(resultEvent.info.url)
    }
  }

  showWidget = widget => {
    widget.open()
  }

  render() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: config.CLOUD_NAME,
        uploadPreset: 'ufhbnsnq'
      },
      (error, result) => {
        this.checkUploadResult(result)
      }
    )
    return (
      <button className="t-button" onClick={() => this.showWidget(widget)}>
        SELECT IMAGE
      </button>
    )
  }
}
