import React from 'react'
import SizePicker from './sizePicker'
import PositionPicker from './positionPicker'
import useSettings from '../useSettings'
import RotatePicker from './rotatePicker'

const BarcodeSettings = () => {
  let { actions, selected } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeEntity({ id: selected.id, new_props })
  }
  return (
    <>
      <PositionPicker selected={selected} onchange={changeHandler} />
      <SizePicker selected={selected} onchange={changeHandler} />
      <RotatePicker selected={selected} onchange={changeHandler} />
    </>
  )
}

export default BarcodeSettings
