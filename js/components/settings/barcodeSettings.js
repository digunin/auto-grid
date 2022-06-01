import React from 'react'
import SizePicker from './pickers/sizePicker'
import PositionPicker from './pickers/positionPicker'
import RotatePicker from './pickers/rotatePicker'
import BarcodeFormatlPicker from './pickers/barcodeFormatPicker'
import DataSelector from './pickers/data-source/dataSelector'
import { changeEntity } from '@/redux/reducers/datasetReducer'
import { useDispatch, useSelector } from 'react-redux'
import getSelectedEntitySelector from '@/redux/selectors/getSelectedEntitySelector'

const BarcodeSettings = () => {
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
        <RotatePicker selected={selected} onchange={changeHandler} />
        <BarcodeFormatlPicker selected={selected} onchange={changeHandler} />
      </div>
      <DataSelector />
    </>
  )
}

export default BarcodeSettings
