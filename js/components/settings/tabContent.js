import React from 'react'
import Block from '../block'
import SizePicker from './sizePicker'

const TabContent = ({ side }) => {
  return (
    <div className="tab-content">
      <div className="block-wrapper">
        <Block index={0} side={side} />
      </div>
      <SizePicker />
    </div>
  )
}

export default TabContent
