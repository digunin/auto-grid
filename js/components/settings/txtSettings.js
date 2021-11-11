import React, { useContext } from 'react'
import PositionPicker from './positionPicker'

import Context from '../../store/settingContext'

const TxtSettings = () => {
  let context = useContext(Context)
  let { actions, active_settings_tab } = context
  let selected = context[active_settings_tab].selected
  const changeHandler = (new_props) => {
    actions.changeText({ classname: selected.key, new_props })
  }
  let tmp = context[active_settings_tab].txt[selected.key]
  return (
    <>
      <PositionPicker selected={tmp} onchange={changeHandler} />
    </>
  )
}

export default TxtSettings
