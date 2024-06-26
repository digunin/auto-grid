import React from 'react'
import ComboSlider from '../comboSlider'

const PositionPicker = ({ onchange, selected }) => {
  return (
    <div className="picker-wrapper">
      <span>Расположение</span>
      <ComboSlider
        xmax="90"
        step="0.1"
        value={selected?.left}
        onchange={({ x }) => {
          onchange({ left: x })
        }}
      />
      <ComboSlider
        xmax="57"
        step="0.1"
        value={selected?.top}
        onchange={({ x }) => {
          onchange({ top: x })
        }}
      />
    </div>
  )
}

export default PositionPicker
