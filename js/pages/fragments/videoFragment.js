import React from 'react'
import withWrapper from './wrapper/withWrapper'

const VideoFragment = ({ src, width = 'auto' }) => {
  return (
    <video width={width} loop controls autoPlay>
      <source src={src} />
    </video>
  )
}

export default withWrapper(VideoFragment)
