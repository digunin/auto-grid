import React, { useRef, useState } from 'react'

const DiapasonPicker = ({ onchange, from = 1, to = 10, disabled = false }) => {
  const [diapason, setDiapason] = useState({ from, to })
  const timeOut = useRef(null)

  const submit = (from, to) => {
    if (timeOut.current) {
      clearTimeout(timeOut.current)
    }
    timeOut.current = setTimeout(() => {
      onchange(Number(from), Number(to))
      timeOut.current = null
    }, 500)
  }

  const onFromChange = (value) => {
    if (Number.isInteger(Number(value))) {
      setDiapason({ ...diapason, from: value })
      submit(value, diapason.to)
    }
  }

  const onToChange = (value) => {
    if (Number.isInteger(Number(value))) {
      setDiapason({ ...diapason, to: value })
      submit(diapason.from, value)
    }
  }

  return (
    <div>
      <span>{`С${'\t'}`}</span>
      <input
        onChange={(e) => onFromChange(e.target.value)}
        value={diapason.from}
        disabled={disabled}
      />
      <br />
      <span>{`По${'\t'}`}</span>
      <input
        onChange={(e) => onToChange(e.target.value)}
        value={diapason.to}
        disabled={disabled}
      />
    </div>
  )
}

export default DiapasonPicker
