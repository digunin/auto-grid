import React, { useState, useRef } from 'react'

const DataGenerator = ({ onchange, amount = 10 }) => {
  const [hide, setHide] = useState(true)

  let startPart = useRef({
    prefix: '',
    variable: '',
    suffix: '',
    amount: amount,
  })

  if (hide) {
    return <button onClick={() => setHide(false)}>Сгенерировать</button>
  }

  const generate = (head, integer, tail, amount) => {
    let converter =
      integer === ''
        ? () => ''
        : (i) => String(Number(integer) + i).padStart(integer.length, '0')
    let result = []
    for (let i = 0; i < amount; i++) {
      result.push(`${head}${converter(i)}${tail}`)
    }
    return result
  }

  const checkInt = (str) => {
    return Number.isInteger(Number(str))
  }

  const onSave = () => {
    if (
      !checkInt(startPart.current.variable) ||
      !checkInt(startPart.current.amount)
    ) {
      console.log('NOT Integer')
      return
    }
    onchange(
      generate(
        startPart.current.prefix,
        startPart.current.variable,
        startPart.current.suffix,
        startPart.current.amount
      )
    )
    setHide(true)
  }
  return (
    <div
      style={{ border: '1px solid black', margin: '1em 0', padding: '0.5em' }}
    >
      <br />
      <input
        type="text"
        placeholder="неизменная часть"
        defaultValue={startPart.current.prefix}
        onChange={(e) => (startPart.current.prefix = e.target.value)}
      />
      <input
        type="text"
        placeholder="изменяемая часть"
        defaultValue={startPart.current.variable}
        onChange={(e) => (startPart.current.variable = e.target.value)}
      />
      <input
        type="text"
        placeholder="неизменная часть"
        defaultValue={startPart.current.suffix}
        onChange={(e) => (startPart.current.suffix = e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="количество карт"
        defaultValue={startPart.current.amount}
        onChange={(e) => (startPart.current.amount = e.target.value)}
      />
      <br />
      <br />
      <button onClick={onSave}>Применить</button>
      <button onClick={() => setHide(true)}>Отмена</button>
    </div>
  )
}

export default DataGenerator
