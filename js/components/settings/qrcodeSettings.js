import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SizePicker from './pickers/sizePicker'
import PositionPicker from './pickers/positionPicker'
import RotatePicker from './pickers/rotatePicker'
import QRCodeLevelPicker from './pickers/qrcodeLevelPicker'
import DataSelector from './pickers/data-source/dataSelector'
import { changeEntity } from '@/redux/reducers/datasetReducer'
import getSelectedEntitySelector from '@/redux/selectors/getSelectedEntitySelector'

const QRCodeSettings = () => {
  const dispatch = useDispatch()
  let selected = useSelector(getSelectedEntitySelector)
  const changeHandler = (new_props) => {
    dispatch(changeEntity(selected.id, new_props))
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
