import React from 'react'
import ComboSlider from '../comboSlider'

const SizePicker = ({ onchange, selected, onlyWidth = false }) => {
  return (
    <div className="picker-wrapper">
      <span>Размеры</span>
      <ComboSlider
        xmax="90"
        step="0.1"
        value={selected?.width}
        onchange={({ x }) => {
          onchange({ width: x })
        }}
      />
      {!onlyWidth && (
        <ComboSlider
          xmax="57"
          step="0.1"
          value={selected?.height}
          onchange={({ x }) => {
            onchange({ height: x })
          }}
        />
      )}
    </div>
  )
}

export default SizePicker
