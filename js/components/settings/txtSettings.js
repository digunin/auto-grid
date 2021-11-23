import React from 'react'
import useSettings from '../useSettings'
import PositionPicker from './positionPicker'
import ColorPicker from './colorPicker'
import RotatePicker from './rotatePicker'
import FontPicker from './fontPicker'

const TxtSettings = () => {
  let { actions, selected } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeEntity({ id: selected.id, new_props })
  }
  return (
    <>
      <PositionPicker selected={selected} onchange={changeHandler} />
      <ColorPicker selected={selected} onchange={changeHandler} />
      <RotatePicker selected={selected} onchange={changeHandler} />
      <FontPicker selected={selected} onchange={changeHandler} />
    </>
  )
}

export default TxtSettings
