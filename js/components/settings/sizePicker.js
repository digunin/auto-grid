import React from 'react'
import Slider from 'react-input-slider'
import ComboSlider from './comboSlider'
import Context from '../../store/settingContext'

const SizePicker = ({ selected = 'not null' }) => {
  const [state, setState] = React.useState({ x: 10, y: 10 })

  return (
    <div className="sliders-wrapper">
      Ширина = {state.x} mm
      <Slider
        axis="x"
        xmax="900"
        xstep="1"
        x={state.x * 10}
        onChange={({ x }) => setState((state) => ({ ...state, x: x / 10 }))}
      />
      <ComboSlider
        xmax="90"
        value={state.x}
        onchange={({ x }) => {
          console.log(`x = ${x}`)
          setState((state) => ({ ...state, x: x / 10 }))
        }}
      />
      {/* {({ x }) => setState((state) => ({ ...state, x: x / 10 }))} */}
      Высота = {state.y} mm
      <Slider
        axis="x"
        xmax="570"
        xstep="1"
        x={state.y * 10}
        onChange={({ x }) => setState((state) => ({ ...state, y: x / 10 }))}
      />
    </div>
  )
}

export default SizePicker
