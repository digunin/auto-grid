import React from 'react'
import useSettings from '../useSettings'

const PrintingModePicker = ({ onchange }) => {
  let { printingMode } = useSettings()
  return (
    <div
      className="picker-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: '1em',
      }}
    >
      <label>
        Сетка (10 карт)
        <input
          defaultChecked={printingMode === 'grid'}
          onChange={(e) => onchange(e.target.value)}
          type="radio"
          name="printingMode"
          value="grid"
        />
      </label>
      <label>
        Сублимация
        <input
          defaultChecked={printingMode === 'sublime'}
          onChange={(e) => onchange(e.target.value)}
          type="radio"
          name="printingMode"
          value="sublime"
        />
      </label>
    </div>
  )
}

export default PrintingModePicker
