import { ColorPicker, createColor } from 'material-ui-color'
import React from 'react'

const TextBorderPicker = ({ onchange, selected }) => {
  return (
    <div className="picker-wrapper">
      Обводка
      <br />
      <br />
      <div
        style={{
          display: 'flex',
          flexFlow: 'flow',
          gap: '5px',
          alignItems: 'start',
          justifyContent: 'space-around',
        }}
      >
        <label>
          Толщина
          <br />
          <input
            value={selected.textBorderWidth}
            type="number"
            name="spiner"
            min="0"
            max="3"
            step="0.1"
            onChange={(e) => {
              onchange({ textBorderWidth: e.target.value })
            }}
          />
        </label>
        <label>
          Цвет
          <ColorPicker
            value={createColor(selected?.textBorderColor)}
            onChange={(value) => {
              onchange({ textBorderColor: `#${value.hex}` })
            }}
          />
        </label>
      </div>
    </div>
  )
}

export default TextBorderPicker
