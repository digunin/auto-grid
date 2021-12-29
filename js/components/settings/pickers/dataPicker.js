import React, { useState } from 'react'

const DataPicker = ({ onchange }) => {
  const [data, setData] = useState()
  return (
    <div>
      <textarea
        rows="20"
        onInput={(e) => {
          setData(e.target.value.trim().split('\n'))
        }}
        value={data.join('\n')}
      ></textarea>
      <button onClick={onchange(data)}></button>
    </div>
  )
}

export default DataPicker
