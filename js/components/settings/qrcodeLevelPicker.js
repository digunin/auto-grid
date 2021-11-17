import React from 'react'

const QRCodeLevelPicker = ({ onchange, selected }) => {
  return (
    <div className="picker-wrapper">
      <span style={{ marginRight: '1em' }}>Уровень коррекции ошибок</span>
      <select
        name="select"
        defaultValue={selected.level}
        onChange={(e) => onchange({ level: e.target.value })}
      >
        <option value="L">L</option>
        <option value="M">M</option>
        <option value="H">H</option>
        <option value="Q">Q</option>
      </select>
    </div>
  )
}

export default QRCodeLevelPicker
