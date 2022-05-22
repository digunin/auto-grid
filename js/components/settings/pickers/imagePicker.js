import React from 'react'
import useImagePicker from './useImagePicker'

const ImagePicker = ({ side }) => {
  let { openFileSelector, bgImage, setImageFile, errorMessage } =
    useImagePicker(side)

  return (
    <div className="picker-wrapper">
      <button onClick={() => openFileSelector()}>Выберите изображение</button>
      <button
        style={{
          marginRight: '1em',
          marginLeft: '1em',
          color: 'red',
          boxShadow: '0 0 5px red',
        }}
        onClick={() => {
          setImageFile(null)
        }}
      >
        Удалить изображение
      </button>
      {bgImage && (
        <span>
          {bgImage.name ? `${bgImage.name}` : 'Изображение по умолчанию'}
        </span>
      )}
      {errorMessage !== '' && (
        <div style={{ color: 'red' }}>{errorMessage}</div>
      )}
    </div>
  )
}

export default ImagePicker
