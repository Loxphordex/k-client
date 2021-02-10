import React, { useEffect, useState } from 'react'
import { Image, Transformation } from 'cloudinary-react'
import config from '../../config'
import './CloudinaryWidget.css'

export default function CloudinaryWidget({ imageUrl, setImageUrl }) {
  const [widget, setWidget] = useState(null)

  useEffect(() => {
    if (!widget) {
      if (window && window.cloudinary) {
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
    }
  }, [imageUrl, setImageUrl])

  function checkUploadResult(resultEvent) {
    if (resultEvent.event === 'success') {
      setImageUrl(resultEvent.info.url)
    }
  }

  function showWidget(wid) {
    if (wid) {
      wid.open()
    }
  }

  return (
    <div className='cloud-widget-container'>
      <button className='cloud-widget-add-image' onClick={() => showWidget(widget)}>
        { imageUrl ? 'Replace Image' : 'Select Image' }
      </button>
      <div className='widget-context'>
        {imageUrl && 
          <Image publicId={imageUrl} type='fetch' name={imageUrl} className='widget-preview-image'>
            <Transformation quality='80' width='100' crop='scale' fetchFormat='auto' />
          </Image>
        }
      </div>
    </div>
  )
}
