import React, { useEffect, useRef, useState } from 'react'
import DataGenerator from './dataGenerator'
import ManualDataInputPicker from './manualDataInputPicker'
import NamePicker from './namePicker'
import useDataSource from './useDataSource'

const DataPicker = ({ onsubmit }) => {
  const {
    editing_source_name,
    existingNames,
    editingData,
    createMode,
    editMode,
  } = useDataSource()

  const newName = useRef({ name: '', isValid: false })
  const newData = useRef()
  const [generatedData, setGeneratedData] = useState(false)
  const [needToSave, setNeedToSave] = useState(false)

  const onInputName = (new_name) => {
    newName.current.name = new_name
    newName.current.isValid = !existingNames.includes(new_name)
  }

  const onManualInput = (str) => {
    newData.current = str
    str.trim() === editingData.join('\n')
      ? setNeedToSave(false)
      : setNeedToSave(true)
  }

  const onSubmit = () => {
    if (createMode && !newName.current.isValid) return
    if (createMode && newName.current.name.length == 0) return
    if (newData.current === '') return
    onsubmit(
      createMode ? newName.current.name : editing_source_name,
      newData.current.trim().split('\n')
    )
  }

  return (
    <div>
      {createMode && (
        <NamePicker onchange={onInputName} existingNames={existingNames} />
      )}
      {editMode && (
        <div>
          <input type="text" disabled value={editing_source_name} />
        </div>
      )}
      <DataGenerator onchange={setGeneratedData} />
      <ManualDataInputPicker
        onchange={onManualInput}
        generatedData={generatedData}
        editingData={editingData}
      />
      {editMode && (
        <button onClick={onSubmit} disabled={!needToSave}>
          Сохранить изменения
        </button>
      )}
      {createMode && (
        <button onClick={onSubmit}>Создать источник данных</button>
      )}
    </div>
  )
}

export default DataPicker
