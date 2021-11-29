import React from 'react'
import useSettings from '../useSettings'
import PositionPicker from './pickers/positionPicker'
import SizePicker from './pickers/sizePicker'
import ColorPicker from './pickers/colorPicker'
import RotatePicker from './pickers/rotatePicker'
import FontPicker from './pickers/fontPicker'

const TxtSettings = () => {
  let { actions, selected } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeEntity({ id: selected.id, new_props })
  }
  return (
    <>
      <PositionPicker selected={selected} onchange={changeHandler} />
      <SizePicker selected={selected} onchange={changeHandler} />
      <ColorPicker selected={selected} onchange={changeHandler} />
      <RotatePicker selected={selected} onchange={changeHandler} />
      <FontPicker selected={selected} onchange={changeHandler} />
    </>
  )
}

export default TxtSettings
