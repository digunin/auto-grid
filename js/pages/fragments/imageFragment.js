import React from 'react'

const ImageFragment = ({ src, width = 'auto' }) => {
  return <img src={src} width={width} />
}

export default ImageFragment
