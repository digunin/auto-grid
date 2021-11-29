import React from 'react'
import ComboSlider from '../comboSlider'

const RotatePicker = ({ onchange, selected }) => {
  return (
    <div className="picker-wrapper">
      <span>Поворот</span>
      <ComboSlider
        xmax="360"
        step="0.1"
        value={selected?.rotate}
        onchange={({ x }) => {
          onchange({ rotate: x })
        }}
      />
    </div>
  )
}

export default RotatePicker
