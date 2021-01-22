import React, { useEffect, useState } from 'react'
import config from '../../config'

export default function CloudinaryWidget({ setImageUrl }) {
  const [widget, setWidget] = useState(null)

  useEffect(() => {
    if (!widget) {
      const unsetWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: config.CLOUD_NAME,
          uploadPreset: 'ufhbnsnq'
        },
        (error, result) => {
          checkUploadResult(result)
        }
      )

      setWidget(unsetWidget)
    }
  }, [])

  function checkUploadResult(resultEvent) {
    if (resultEvent.event === 'success') {
      setImageUrl(resultEvent.info.url)
    }
  }

  function showWidget(wid) {
    wid.open()
  }

  return (
    <button className="t-button" onClick={() => showWidget(widget)}>
      SELECT IMAGE
    </button>
  )
}
