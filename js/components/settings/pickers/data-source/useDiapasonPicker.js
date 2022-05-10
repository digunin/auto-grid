import { useRef, useState } from 'react'

const useDiapasonPicker = (onchange, max, from, to) => {
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

  return { diapason, onFromChange, onToChange }
}

export default useDiapasonPicker
