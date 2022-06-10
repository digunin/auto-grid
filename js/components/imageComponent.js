import React from 'react'

const ImageComponent = ({ file, side }) => {
  return <img className={`card-image ${side}-image`} src={file.content} />
}

export default ImageComponent
