import React from 'react'
import SizePicker from './sizePicker'
import PositionPicker from './positionPicker'
import useSettings from '../useSettings'

const BarcodeSettings = () => {
  let { actions, selected, selectedKey } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeBarcode({ classname: selectedKey, new_props })
  }
  return (
    <>
      <PositionPicker selected={selected} onchange={changeHandler} />
      <SizePicker selected={selected} onchange={changeHandler} />
    </>
  )
}

export default BarcodeSettings
