import React from 'react'
import SizePicker from './pickers/sizePicker'
import PositionPicker from './pickers/positionPicker'
import useSettings from '../useSettings'
import RotatePicker from './pickers/rotatePicker'
import BarcodeFormatlPicker from './pickers/barcodeFormatPicker'
import DataPicker from './pickers/dataPicker'

const BarcodeSettings = () => {
  let { actions, selected } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeEntity({ id: selected.id, new_props })
  }
  return (
    <>
      <div className="pickers-left-group">
        <PositionPicker selected={selected} onchange={changeHandler} />
        <SizePicker selected={selected} onchange={changeHandler} />
        <RotatePicker selected={selected} onchange={changeHandler} />
        <BarcodeFormatlPicker selected={selected} onchange={changeHandler} />
      </div>

      <DataPicker
        selected={selected}
        onchange={(data) => actions.setData(data)}
      />
    </>
  )
}

export default BarcodeSettings
