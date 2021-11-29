import React from 'react'
import { barcodeFormats } from '../../../utils'

const BarcodeFormatlPicker = ({ onchange, selected }) => {
  return (
    <div className="picker-wrapper">
      <div
        style={{
          display: 'grid',
          gap: '1em',
          gridTemplateColumns: '1fr 2fr 2fr',
        }}
      >
        <label>
          формат
          <br />
          <select
            name="select"
            defaultValue={selected.format}
            onChange={(e) => onchange({ format: e.target.value })}
          >
            {barcodeFormats.map(([format, formatName]) => {
              return (
                <option key={format} value={format}>
                  {formatName}
                </option>
              )
            })}
          </select>
        </label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={!selected.displayValue}
              onChange={(e) => {
                let checked = e.target.checked
                onchange({
                  displayValue: !checked,
                  flat: checked,
                  textPosition: 'bottom',
                })
              }}
            />
            Скрыть текст
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={selected.textPosition === 'top' ? true : false}
              disabled={!selected.displayValue}
              onChange={(e) => {
                let checked = e.target.checked
                onchange({ textPosition: checked ? 'top' : 'bottom' })
              }}
            />
            Текст вверху
          </label>
        </div>
        <label>
          Толщина штриха
          <input
            style={{ marginRight: '1em' }}
            value={selected.barWidth}
            type="number"
            name="spiner"
            min="0"
            max="5"
            step="0.1"
            onChange={(e) => {
              onchange({ barWidth: e.target.value })
            }}
          />
        </label>
      </div>
    </div>
  )
}

export default BarcodeFormatlPicker
