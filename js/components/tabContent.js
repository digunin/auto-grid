import React from 'react'
import Block from './block'

const TabContent = ({ side }) => {
  return (
    <div className="tab-content">
      <div className="block-wrapper">
        <Block index={0} side={side} />
      </div>
    </div>
  )
}

export default TabContent
