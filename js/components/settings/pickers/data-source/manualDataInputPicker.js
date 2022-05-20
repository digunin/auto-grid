import React, { useEffect, useState } from 'react'

const ManualDataInputPicker = ({ onchange, editingData, generatedData }) => {
  const [inputText, setInputText] = useState(editingData.join('\n'))

  useEffect(() => {
    changeHandler(editingData.join('\n'))
  }, [JSON.stringify(editingData)])

  useEffect(() => {
    if (generatedData) {
      changeHandler(generatedData.join('\n'))
    }
  }, [JSON.stringify(generatedData)])

  const changeHandler = (str) => {
    onchange(str)
    setInputText(str)
  }

  return (
    <div>
      <textarea
        rows={20}
        cols={40}
        value={inputText}
        placeholder="Источник данных не может быть пустым"
        onChange={(e) => changeHandler(e.target.value)}
      ></textarea>
    </div>
  )
}

export default ManualDataInputPicker
