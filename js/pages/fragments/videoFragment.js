import React from 'react'

const VideoFragment = ({ src, width = 'auto' }) => {
  return (
    <video width={width} loop controls>
      <source src={src} />
    </video>
  )
}

export default VideoFragment
