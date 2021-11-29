import React from 'react'
import SizePicker from './pickers/sizePicker'
import PositionPicker from './pickers/positionPicker'
import useSettings from '../useSettings'
import RotatePicker from './pickers/rotatePicker'
import QRCodeLevelPicker from './pickers/qrcodeLevelPicker'

const QRCodeSettings = () => {
  let { actions, selected } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeEntity({ id: selected.id, new_props })
  }
  return (
    <>
      <PositionPicker selected={selected} onchange={changeHandler} />
      <SizePicker
        onlyWidth={true}
        selected={selected}
        onchange={changeHandler}
      />
      <RotatePicker selected={selected} onchange={changeHandler} />
      <QRCodeLevelPicker selected={selected} onchange={changeHandler} />
    </>
  )
}

export default QRCodeSettings
