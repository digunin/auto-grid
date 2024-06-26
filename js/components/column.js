import React from 'react'
import Block from './block'

const Column = ({ subclass, data, side }) => {
  return (
    <div className={`column ${subclass}`}>
      {data.map((value, i) => {
        return (
          <Block
            onclick={(data) => {
              return
            }}
            subclass={'grid-block'}
            side={side}
            key={i}
            index={value}
          />
        )
      })}
    </div>
  )
}

export default Column
