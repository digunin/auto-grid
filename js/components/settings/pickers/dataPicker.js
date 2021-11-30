import React from 'react'

const DataPicker = ({ onchange, selected }) => {
  return (
    <textarea
      rows="20"
      onInput={(e) => {
        onchange(e.target.value.trim().split('\n'))
      }}
      value={selected.data.join('\n')}
    ></textarea>
  )
}

export default DataPicker
