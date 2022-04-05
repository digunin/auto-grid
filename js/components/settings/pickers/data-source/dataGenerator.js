import React, { useState, useRef } from 'react'

const DataGenerator = ({ onchange }) => {
  const [hide, setHide] = useState(true)
  let startPart = useRef({ prefix: '', variable: 0, suffix: '' })
  if (hide) {
    return <button onClick={() => setHide(false)}>Сгенерировать</button>
  }
  const onSave = () => {
    // onchange([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    console.log(startPart)
    setHide(true)
  }
  return (
    <div style={{ border: '1px solid black' }}>
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
      <input type="number" placeholder="количество карт" />
      <br />
      <br />
      <button onClick={onSave}>Применить</button>
      <button onClick={() => setHide(true)}>Отмена</button>
    </div>
  )
}

export default DataGenerator
