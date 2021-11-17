import React from 'react'
import { ColorPicker as Picker, createColor } from 'material-ui-color'

const ColorPicker = ({ onchange, selected }) => {
  return (
    <div className="picker-wrapper">
      <span>Выберите цвет</span>
      <Picker
        value={createColor(selected?.color)}
        onChange={(value) => {
          onchange({ color: `#${value.hex}` })
        }}
      />
    </div>
  )
}

export default ColorPicker
