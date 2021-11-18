import React from 'react'
import { barcodeFormats } from '../../utils'

const BarcodeFormatlPicker = ({ onchange, selected }) => {
  return (
    <div className="picker-wrapper">
      <span style={{ marginRight: '1em' }}>Формат</span>
      <select
        name="select"
        defaultValue={selected.format}
        onChange={(e) => onchange({ format: e.target.value })}
      >
        {/* <option value="ean13">EAN-13</option>
        <option value="code128">CODE128</option>
        <option value="code128a">CODE128-A</option>
        <option value="code128b">CODE128-B</option>
        <option value="code128c">CODE128-C</option>
        <option value="code39">CODE39</option> */}
        {barcodeFormats.map(([format, formatName]) => {
          return (
            <option key={format} value={format}>
              {formatName}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default BarcodeFormatlPicker
