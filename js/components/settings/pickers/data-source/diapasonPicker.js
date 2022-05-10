import React from 'react'
import useDiapasonPicker from './useDiapasonPicker'

const DiapasonPicker = ({ onchange, max, from = 1, to = max }) => {
  const { diapason, onFromChange, onToChange } = useDiapasonPicker(
    onchange,
    max,
    from,
    to
  )

  return (
    <div>
      <span>{`С${'\t'}`}</span>
      <input
        onChange={(e) => onFromChange(e.target.value)}
        value={diapason.from}
      />
      <br />
      <span>{`По${'\t'}`}</span>
      <input onChange={(e) => onToChange(e.target.value)} value={diapason.to} />
    </div>
  )
}

export default DiapasonPicker
