import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PositionPicker from './pickers/positionPicker'
import SizePicker from './pickers/sizePicker'
import ColorPicker from './pickers/colorPicker'
import RotatePicker from './pickers/rotatePicker'
import FontPicker from './pickers/fontPicker'
import DataSelector from './pickers/data-source/dataSelector'
import { changeEntity } from '@/redux/reducers/datasetReducer'
import getSelectedEntitySelector from '@/redux/selectors/getSelectedEntitySelector'
import TextBorderPicker from './pickers/textBorderPicker'

const TxtSettings = () => {
  const dispatch = useDispatch()
  let selected = useSelector(getSelectedEntitySelector)
  const changeHandler = (new_props) => {
    dispatch(changeEntity(selected.id, new_props))
  }
  return (
    <>
      <div className="pickers-left-group">
        <PositionPicker selected={selected} onchange={changeHandler} />
        <SizePicker selected={selected} onchange={changeHandler} />
        <ColorPicker selected={selected} onchange={changeHandler} />
        <RotatePicker selected={selected} onchange={changeHandler} />
        <FontPicker selected={selected} onchange={changeHandler} />
        <TextBorderPicker selected={selected} onchange={changeHandler} />
      </div>
      <DataSelector />
    </>
  )
}

export default TxtSettings
