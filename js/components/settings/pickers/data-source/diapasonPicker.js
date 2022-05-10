import React, { useRef, useState } from 'react'

const DiapasonPicker = ({ onchange, max, from = 1, to = max }) => {
  const [diapason, setDiapason] = useState({ from, to })
  const timeOut = useRef(null)

  const submit = (from, to) => {
    if (timeOut.current) {
      clearTimeout(timeOut.current)
    }
    from = Number(from)
    to = Number(to)
    if (from < 1) from = 1
    if (to > max) to = max
    timeOut.current = setTimeout(() => {
      onchange(from, to)
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
      />
      <br />
      <span>{`По${'\t'}`}</span>
      <input onChange={(e) => onToChange(e.target.value)} value={diapason.to} />
    </div>
  )
}

export default DiapasonPicker
