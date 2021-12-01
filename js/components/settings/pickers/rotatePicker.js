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
      <button onClick={() => onchange({ rotate: 0 })}> 0 </button>
      <button onClick={() => onchange({ rotate: 90 })}> 90</button>
      <button onClick={() => onchange({ rotate: 180 })}>180</button>
      <button onClick={() => onchange({ rotate: 270 })}>270</button>
    </div>
  )
}

export default RotatePicker
