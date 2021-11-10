import React from 'react'
import Block from '../block'
import SizePicker from './sizePicker'
import PositionPicker from './positionPicker'

const BarcodeSettings = ({ side }) => {
  return (
    <div className="tab-content">
      <div className="block-wrapper">
        <Block index={0} side={side} />
      </div>
      <PositionPicker />
      <SizePicker />
    </div>
  )
}

export default BarcodeSettings
