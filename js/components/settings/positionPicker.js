import React from 'react'
import ComboSlider from './comboSlider'

const PositionPicker = ({ onchange, selected }) => {
  let align = 'left'
  if (selected.type === 'txt') {
    align = selected.align
  }
  return (
    <div className="picker-wrapper">
      <span>Расположение</span>
      <ComboSlider
        xmax="90"
        step="0.1"
        value={align === 'left' ? selected?.left : selected.right}
        onchange={({ x }) => {
          onchange(align === 'left' ? { left: x } : { right: x })
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
