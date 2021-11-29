import React from 'react'

const ImageComponent = ({ file }) => {
  return <img className={'card-image'} src={file.content} />
}

export default ImageComponent
