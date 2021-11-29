import React, { useEffect } from 'react'
import { useFilePicker } from 'use-file-picker'
import useSettings from '../../useSettings'

const ImagePicker = ({ side }) => {
  const {
    bgImage,
    actions: { setImageFile },
  } = useSettings(side)
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    multiple: false,
    limitFilesConfig: { max: 2 },
    // minFileSize: 1,
    maxFileSize: 50, // in megabytes
  })

  useEffect(() => {
    if (filesContent.length != 0) {
      setImageFile(filesContent[0])
    }
  }, [filesContent])

  if (errors.length) {
    return <div style={{ color: 'red' }}>Error...</div>
  }

  return (
    <div className="picker-wrapper">
      <button onClick={() => openFileSelector()}>Выберите изображение</button>
      <button
        style={{ marginRight: '1em', marginLeft: '1em' }}
        onClick={() => setImageFile(null)}
      >
        Удалить изображение
      </button>
      {bgImage && (
        <span>{bgImage.name ? bgImage.name : 'Изображение по умолчанию'}</span>
      )}
    </div>
  )
}

export default ImagePicker
