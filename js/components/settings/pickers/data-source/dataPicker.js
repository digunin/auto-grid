import React, { useEffect, useRef, useState } from 'react'
import DataGenerator from './dataGenerator'
import ManualDataInputPicker from './manualDataInputPicker'
import NamePicker from './namePicker'

const DataPicker = ({
  editing_source_name,
  source_names,
  onsubmit,
  editingData = [],
}) => {
  const name = useRef({ name: '', isValid: false })
  const data = useRef()
  const [generatedData, setGeneratedData] = useState(false)
  const [needToSave, setNeedToSave] = useState(false)
  useEffect(() => {
    setGeneratedData(false)
  }, [editing_source_name])
  let createMode = editing_source_name === '' ? true : false
  let editMode = !createMode

  const onInputName = (new_name) => {
    name.current.name = new_name
    name.current.isValid = !source_names.includes(new_name)
  }

  const onManualInput = (str) => {
    data.current = str
    str.trim() === editingData.join('\n')
      ? setNeedToSave(false)
      : setNeedToSave(true)
  }

  const onSubmit = () => {
    if (createMode && !name.current.isValid) return
    if (createMode && name.current.name.length == 0) return
    console.log(data.current)
    onsubmit(
      createMode ? name.current.name : editing_source_name,
      data.current.trim().split('\n')
    )
  }

  return (
    <div>
      {createMode && (
        <NamePicker onchange={onInputName} existingNames={source_names} />
      )}
      {editMode && (
        <div>
          <input type="text" disabled value={editing_source_name} />
        </div>
      )}
      <DataGenerator onchange={setGeneratedData} />
      <ManualDataInputPicker
        onchange={onManualInput}
        defaultData={generatedData ? generatedData : editingData}
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
