import React, { useState } from 'react'

const NamePicker = ({ onchange, existingNames }) => {
  const [name, setName] = useState('')

  const isValid = !existingNames.includes(name)

  const onInputName = (str) => {
    setName(str.trim())
    onchange(str.trim())
  }

  return (
    <div>
      <label>
        <p style={{ color: isValid ? 'black' : 'red' }}>
          {isValid
            ? 'Введите название без пробелов'
            : 'Название уже используется'}
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => onInputName(e.target.value)}
        ></input>
        <br />
      </label>
    </div>
  )
}

export default NamePicker
