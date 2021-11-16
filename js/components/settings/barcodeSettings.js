import React from 'react'
import SizePicker from './sizePicker'
import PositionPicker from './positionPicker'
import useSettings from '../useSettings'

const BarcodeSettings = () => {
  let { actions, selected } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeEntity({ id: selected.id, new_props })
  }
  return (
    <>
      <PositionPicker selected={selected} onchange={changeHandler} />
      <SizePicker selected={selected} onchange={changeHandler} />
    </>
  )
}

export default BarcodeSettings
