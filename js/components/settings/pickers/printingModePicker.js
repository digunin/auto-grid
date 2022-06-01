import React from 'react'
import { useSelector } from 'react-redux'
import printingSelector from '@/redux/selectors/printingSelector'

const PrintingModePicker = ({ onchange }) => {
  let { printingMode } = useSelector(printingSelector)
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
        <input
          defaultChecked={printingMode === 'grid'}
          onChange={(e) => onchange(e.target.value)}
          type="radio"
          name="printingMode"
          value="grid"
        />
        Сетка (10 карт)
      </label>
      <label>
        <input
          defaultChecked={printingMode === 'sublime'}
          onChange={(e) => onchange(e.target.value)}
          type="radio"
          name="printingMode"
          value="sublime"
        />
        Сублимация
      </label>
    </div>
  )
}

export default PrintingModePicker
