import React from 'react'
import SizePicker from './pickers/sizePicker'
import PositionPicker from './pickers/positionPicker'
import useSettings from '../useSettings'
import RotatePicker from './pickers/rotatePicker'
import BarcodeFormatlPicker from './pickers/barcodeFormatPicker'
import DataSelector from './pickers/dataSelector'

const BarcodeSettings = () => {
  let { actions, selected } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeEntity(selected.id, new_props)
  }
  return (
    <>
      <div className="pickers-left-group">
        <PositionPicker selected={selected} onchange={changeHandler} />
        <SizePicker selected={selected} onchange={changeHandler} />
        <RotatePicker selected={selected} onchange={changeHandler} />
        <BarcodeFormatlPicker selected={selected} onchange={changeHandler} />
      </div>

      <DataSelector
        onchange={(data) => actions.changeEntity(selected.id, { data: data })}
      />
    </>
  )
}

export default BarcodeSettings
