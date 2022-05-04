import { useRef } from 'react'

const useDataPicker = (
  editing_source_name,
  existingNames,
  editingData,
  createMode,
  onsubmit,
  setNeedToSave
) => {
  const newName = useRef({ name: '', isValid: false })
  const newData = useRef()

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
  return {
    newName,
    newData,
    onInputName,
    onManualInput,
    onSubmit,
  }
}

export default useDataPicker
