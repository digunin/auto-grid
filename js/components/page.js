import React from 'react'
import Lightmark from './light-mark'
import { lightMarkClasses } from '../utils'

const Page = () => {
  return (
    <div className="page">
      {lightMarkClasses.map((subclass, index) => {
        console.log(index)
        return <Lightmark key={index} subclass={subclass} />
      })}
    </div>
  )
}

export default Page
