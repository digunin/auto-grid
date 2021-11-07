import React from 'react'
import Lightmark from './light-mark'
import Cross from './cross'
import Column from './column'
import { lightMarkClasses, crossClasses } from '../utils'

const Page = ({ side, left_data, right_data }) => {
  return (
    <div className="page">
      {lightMarkClasses.map((subclass, index) => {
        return <Lightmark key={index} subclass={subclass} />
      })}

      {crossClasses.map((subclass, index) => {
        subclass =
          index == crossClasses.length - 1
            ? `${subclass} ${crossClasses[0]}`
            : `${subclass} ${crossClasses[index + 1]}`
        return <Cross key={index} subclass={subclass} />
      })}

      <Column
        side={side}
        key="left-column"
        subclass="left-column"
        data={left_data}
      />
      <Column
        side={side}
        key="right-column"
        subclass="right-column"
        data={right_data}
      />
    </div>
  )
}

export default Page
