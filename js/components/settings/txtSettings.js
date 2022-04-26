import React from 'react'
import useSettings from '../useSettings'
import PositionPicker from './pickers/positionPicker'
import SizePicker from './pickers/sizePicker'
import ColorPicker from './pickers/colorPicker'
import RotatePicker from './pickers/rotatePicker'
import FontPicker from './pickers/fontPicker'
import DataSelector from './pickers/dataSelector'

const TxtSettings = () => {
  let { actions, selected } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeEntity(selected.id, new_props)
  }
  return (
    <>
      <div className="pickers-left-group">
        <PositionPicker selected={selected} onchange={changeHandler} />
        <SizePicker selected={selected} onchange={changeHandler} />
        <ColorPicker selected={selected} onchange={changeHandler} />
        <RotatePicker selected={selected} onchange={changeHandler} />
        <FontPicker selected={selected} onchange={changeHandler} />
      </div>
      <DataSelector
        selected={selected}
        onchange={(data) => actions.setData(data)}
      />
    </>
  )
}

export default TxtSettings
