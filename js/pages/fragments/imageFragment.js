import React from 'react'
import withWrapper from './withWrapper'

const ImageFragment = ({ src, width = 'auto', style = {} }) => {
  return <img style={style} src={src} width={width} />
}

export default withWrapper(ImageFragment)
