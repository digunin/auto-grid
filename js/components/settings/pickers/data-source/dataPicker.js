import React, { useRef } from 'react'
import DataGenerator from './dataGenerator'
import NamePicker from './namePicker'

const DataPicker = ({ mode, source_names }) => {
  const name = useRef({ name: '', isValid: true })

  const onInputName = (new_name) => {
    name.current.name = new_name
    name.current.isValid = !source_names.includes(new_name)
  }

  return (
    <div>
      <NamePicker onchange={onInputName} existingNames={source_names} />
      <DataGenerator />
    </div>
  )
}

export default DataPicker
