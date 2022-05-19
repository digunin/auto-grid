import { useEffect, useRef, useState } from 'react'

const useDiapasonPicker = (onchange, max, from, to) => {
  const [diapason, setDiapason] = useState({ from, to })
  const timeOut = useRef(null)

  useEffect(() => {
    setDiapason({ from, to })
  }, [from, to])

  const submit = (from, to) => {
    if (timeOut.current) {
      clearTimeout(timeOut.current)
    }
    timeOut.current = setTimeout(() => {
      onchange(from, to)
      timeOut.current = null
    }, 500)
  }

  const normalizeValue = (value) => {
    value = Number(value)
    value = value < 1 ? 1 : value
    value = value > max ? max : value
    return value
  }

  const onFromChange = (value) => {
    if (Number.isInteger(Number(value))) {
      value = normalizeValue(value)
      setDiapason({ ...diapason, from: value })
      submit(value, diapason.to)
    }
  }

  const onToChange = (value) => {
    if (Number.isInteger(Number(value))) {
      value = normalizeValue(value)
      setDiapason({ ...diapason, to: value })
      submit(diapason.from, value)
    }
  }

  return { diapason, onFromChange, onToChange }
}

export default useDiapasonPicker
