import React from 'react'
import Block from './block'

const Column = ({ subclass, data, img }) => {
  return (
    <div className={`column ${subclass}`}>
      {data.map((value, i) => {
        return <Block img={img} key={i} value={value} />
      })}
    </div>
  )
}

export default Column
