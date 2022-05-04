import React from 'react'
import SizePicker from './pickers/sizePicker'
import PositionPicker from './pickers/positionPicker'
import useSettings from '../useSettings'
import RotatePicker from './pickers/rotatePicker'
import QRCodeLevelPicker from './pickers/qrcodeLevelPicker'
import DataSelector from './pickers/data-source/dataSelector'

const QRCodeSettings = () => {
  let { actions, selected } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeEntity(selected.id, new_props)
  }
  return (
    <>
      <div className="pickers-left-group">
        <PositionPicker selected={selected} onchange={changeHandler} />
        <SizePicker
          onlyWidth={true}
          selected={selected}
          onchange={changeHandler}
        />
        <RotatePicker selected={selected} onchange={changeHandler} />
        <QRCodeLevelPicker selected={selected} onchange={changeHandler} />
      </div>
      <DataSelector />
    </>
  )
}

export default QRCodeSettings
