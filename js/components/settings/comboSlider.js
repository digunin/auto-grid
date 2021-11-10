import React, { useState } from 'react'
import Slider from 'react-input-slider'

const ComboSlider = ({ xmax, value, onchange }) => {
  return (
    <div className="combo-slider">
      Ширина = {value} mm
      <br />
      <input
        value={value}
        type="number"
        name="spiner"
        min="0"
        max={xmax}
        step="0.1"
        onChange={(e) => {
          console.log(e.target.value)
          onchange({ x: e.target.value * 10 })
        }}
      />
      <br />
      <Slider
        axis="x"
        xmax={xmax * 10}
        xstep="1"
        x={value * 10}
        onChange={onchange}
      />
    </div>
  )
}

export default ComboSlider
