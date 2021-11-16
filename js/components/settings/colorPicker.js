import React from 'react'
import { ColorPicker as Picker, createColor } from 'material-ui-color'
import useSettings from '../useSettings'

const ColorPicker = () => {
  let { selected, actions } = useSettings()
  const handleChange = (value) => {
    actions.changeEntity({
      id: selected?.id,
      new_props: { color: `#${value.hex}` },
    })
  }
  return (
    <div className="picker-wrapper">
      <span>Выберите цвет</span>
      <Picker value={createColor(selected?.color)} onChange={handleChange} />
    </div>
  )
}

export default ColorPicker
