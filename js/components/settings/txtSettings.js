import React from 'react'
import useSettings from '../useSettings'
import PositionPicker from './positionPicker'
import ColorPicker from './colorPicker'

const TxtSettings = () => {
  let { actions, selected } = useSettings()
  const changeHandler = (new_props) => {
    actions.changeEntity({ id: selected.id, new_props })
  }
  return (
    <>
      <PositionPicker selected={selected} onchange={changeHandler} />
      <ColorPicker />
    </>
  )
}

export default TxtSettings
