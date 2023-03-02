import React from 'react'
import withWrapper from './withWrapper'

const VideoFragment = ({ src, width = 'auto', style = {} }) => {
  return (
    <video style={style} width={width} loop controls>
      <source src={src} />
    </video>
  )
}

export default withWrapper(VideoFragment)
