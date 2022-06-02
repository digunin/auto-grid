import React from 'react'
import useImagePicker from './useImagePicker'

const ImagePicker = ({ side }) => {
  let { openFileSelector, bgImage, onDelete, errorMessage } =
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
        onClick={onDelete}
      >
        Удалить изображение
      </button>
      {bgImage && (
        <>
          <span>
            {bgImage.name ? `${bgImage.name}` : 'Изображение по умолчанию'}
          </span>
          {bgImage.size && (
            <span
              style={{
                fontSize: '1.2em',
                marginLeft: '2em',
                color: bgImage.size_color,
              }}
            >
              {`${bgImage.size} Кб`}
            </span>
          )}
        </>
      )}
      {errorMessage !== '' && (
        <div style={{ color: 'red' }}>{errorMessage}</div>
      )}
    </div>
  )
}

export default ImagePicker
