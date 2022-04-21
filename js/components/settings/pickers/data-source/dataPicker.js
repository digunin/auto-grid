import React, { useRef, useState } from 'react'
import DataGenerator from './dataGenerator'
import ManualDataInputPicker from './manualDataInputPicker'
import NamePicker from './namePicker'

const DataPicker = ({ mode, source_names, setDataSource }) => {
  const name = useRef({ name: '', isValid: true })
  const data = useRef()
  const [generatedData, setGeneratedData] = useState(false)

  const onInputName = (new_name) => {
    name.current.name = new_name
    name.current.isValid = !source_names.includes(new_name)
  }

  const onManualInput = (str) => {
    data.current = str
  }

  const onSubmit = () => {
    if (!name.current.isValid) return
    if (name.current.name.length == 0) return
    setDataSource(name.current.name, data.current.trim().split('\n'))
  }

  return (
    <div>
      <NamePicker onchange={onInputName} existingNames={source_names} />
      <DataGenerator onchange={setGeneratedData} />
      <ManualDataInputPicker
        onchange={onManualInput}
        generated_data={generatedData}
      />
      <button onClick={onSubmit}>Сохранить</button>
    </div>
  )
}

export default DataPicker
