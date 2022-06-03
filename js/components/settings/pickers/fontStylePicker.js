import React from 'react'

const FontStylePicker = ({ onchange, selected }) => {
  return (
    <div className="picker-wrapper">
      <div
        style={{
          display: 'flex',
          flexFlow: 'flow',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={selected.fontWeight === 'bold'}
            onChange={(e) => {
              let checked = e.target.checked
              onchange({
                fontWeight: checked ? 'bold' : 'normal',
              })
            }}
          />
          Жирный
        </label>
        <label>
          <input
            type="checkbox"
            checked={selected.fontStyle === 'italic'}
            onChange={(e) => {
              let checked = e.target.checked
              onchange({
                fontStyle: checked ? 'italic' : 'normal',
              })
            }}
          />
          Курсив
        </label>
        <label>
          <input
            type="checkbox"
            checked={selected.textDecoration === 'underline'}
            onChange={(e) => {
              let checked = e.target.checked
              onchange({
                textDecoration: checked ? 'underline' : 'none',
              })
            }}
          />
          Подчеркнутый
        </label>
      </div>
    </div>
  )
}

export default FontStylePicker
