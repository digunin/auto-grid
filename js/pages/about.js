import React from 'react'
import VideoFragment from './fragments/videoFragment'
import ImageFragment from './fragments/imageFragment'
import video_1 from '../../media/video/video_1.mp4'
import img_1 from '../../media/image/img_1.jpg'

const About = () => {
  const width = '300px'
  return (
    <div className="about-page">
      <h1>О программе</h1>
      <VideoFragment src={video_1} width={width} />
      <ImageFragment src={img_1} width={width} />
    </div>
  )
}

export default About
