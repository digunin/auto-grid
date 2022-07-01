import React, { useRef } from 'react'
import useDiapasonPicker from './useDiapasonPicker'

const DiapasonPicker = ({ onchange, onfocus, max, from = 1, to = max }) => {
  const { diapason, onFromChange, onToChange } = useDiapasonPicker(
    onchange,
    max,
    from,
    to
  )

  const fromRef = useRef()
  const toRef = useRef()

  return (
    <div>
      <span>{`С${'\t'}`}</span>
      <input
        ref={fromRef}
        onFocus={() => {
          fromRef.current.setSelectionRange(0, String(from).length)
          onfocus('from')
        }}
        onChange={(e) => onFromChange(e.target.value)}
        value={diapason.from}
      />
      <br />
      <span>{`По${'\t'}`}</span>
      <input
        ref={toRef}
        onFocus={() => {
          toRef.current.setSelectionRange(0, String(to).length)
          onfocus('to')
        }}
        onChange={(e) => onToChange(e.target.value)}
        value={diapason.to}
      />
    </div>
  )
}

export default DiapasonPicker
