import React, { useState } from 'react'
import DataGenerator from './dataGenerator'
import ManualDataInputPicker from './manualDataInputPicker'
import NamePicker from './namePicker'
import useDataSource from './useDataSource'
import useDataPicker from './useDataPicker'

const DataPicker = ({ onsubmit }) => {
  const [generatedData, setGeneratedData] = useState(false)
  const [needToSave, setNeedToSave] = useState(false)

  const {
    editing_source_name,
    existingNames,
    editingData,
    createMode,
    editMode,
  } = useDataSource()

  let { onInputName, onManualInput, onSubmit } = useDataPicker(
    editing_source_name,
    existingNames,
    editingData,
    createMode,
    onsubmit,
    setNeedToSave
  )

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
