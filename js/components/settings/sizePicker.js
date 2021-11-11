import React from 'react'
import ComboSlider from './comboSlider'
import Context from '../../store/settingContext'

const SizePicker = ({ onchange, selected }) => {
  return (
    <div className="sliders-wrapper">
      <span>Размеры</span>
      <ComboSlider
        xmax="90"
        step="0.1"
        value={selected?.width}
        onchange={({ x }) => {
          onchange({ width: x })
        }}
      />
      <ComboSlider
        xmax="57"
        step="0.1"
        value={selected?.height}
        onchange={({ x }) => {
          onchange({ height: x })
        }}
      />
    </div>
  )
}

export default SizePicker
