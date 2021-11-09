import React from 'react'
import Slider from 'react-input-slider'

const SizePicker = ({ type }) => {
  const [state, setState] = React.useState({ x: 10, y: 10 })

  return (
    <div className="sliders-wrapper">
      X = {state.x}
      <Slider
        axis="x"
        xmax="90"
        xstep="0.1"
        x={state.x}
        onChange={({ x }) => setState((state) => ({ ...state, x }))}
      />
      Y = {state.y}
      <Slider
        axis="x"
        xmax="57"
        xstep="0.1"
        x={state.y}
        onChange={({ x }) => setState((state) => ({ ...state, y: x }))}
      />
      Ширина = {state.x}
      <Slider
        axis="x"
        xmax="90"
        xstep="0.1"
        x={state.x}
        onChange={({ x }) => setState((state) => ({ ...state, x }))}
      />
      Высота = {state.y}
      <Slider
        axis="x"
        xmax="57"
        xstep="0.1"
        x={state.y}
        onChange={({ x }) => setState((state) => ({ ...state, y: x }))}
      />
    </div>
  )
}

export default SizePicker
