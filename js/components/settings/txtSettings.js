import React from 'react'
import useSettings from '../useSettings'
import PositionPicker from './positionPicker'

const TxtSettings = () => {
  let { actions, selected, selectedKey } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeText({ id: selectedKey, new_props })
  }
  return (
    <>
      <PositionPicker selected={selected} onchange={changeHandler} />
    </>
  )
}

export default TxtSettings
