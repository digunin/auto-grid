import React from 'react'
import Slider from 'react-input-slider'
import Context from '../../store/settingContext'

const PositionPicker = ({ selected = ' ' }) => {
  const [state, setState] = React.useState({ x: 10, y: 10 })

  return (
    <div className="sliders-wrapper">
      X = {state.x} mm
      <Slider
        axis="x"
        xmax="900"
        xstep="1"
        disabled={!selected}
        x={state.x * 10}
        onChange={({ x }) => setState((state) => ({ ...state, x: x / 10 }))}
      />
      Y = {state.y} mm
      <Slider
        axis="x"
        xmax="570"
        xstep="1"
        disabled={!selected}
        x={state.y * 10}
        onChange={({ x }) => setState((state) => ({ ...state, y: x / 10 }))}
      />
    </div>
  )
}

export default PositionPicker
