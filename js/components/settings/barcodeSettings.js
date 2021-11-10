import React, { useContext } from 'react'
import SizePicker from './sizePicker'
import PositionPicker from './positionPicker'
import Context from '../../store/settingContext'

const BarcodeSettings = () => {
  let context = useContext(Context)
  let { actions, active_settings_tab } = context
  let selected = context[active_settings_tab].selected
  const changeHandler = (new_props) => {
    actions.changeBarcode({ classname: selected.key, new_props })
  }
  let tmp = context[active_settings_tab].barcodes[selected.key]
  return (
    <>
      <PositionPicker selected={tmp} onchange={changeHandler} />
      <SizePicker selected={tmp} onchange={changeHandler} />
    </>
  )
}

export default BarcodeSettings
