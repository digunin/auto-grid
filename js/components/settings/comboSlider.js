import React, { useState } from 'react'
import Slider from 'react-input-slider'

const ComboSlider = ({ xmax, value, onchange, step }) => {
  return (
    <div className="combo-slider">
      <input
        value={value}
        type="number"
        name="spiner"
        min="0"
        max={xmax}
        step={step}
        onChange={(e) => {
          onchange({ x: e.target.value })
        }}
      />
      <Slider axis="x" xmax={xmax} xstep={step} x={value} onChange={onchange} />
    </div>
  )
}

export default ComboSlider
