import { dataSelectorModeInfo } from '../../../../utils'

const useSelectedDataPicker = (selected, selectedDataSource, setDataSource) => {
  const isMultiple =
    selectedDataSource.data_selector_mode === dataSelectorModeInfo[2][0]
  const isDisabled =
    selectedDataSource.data_selector_mode !== dataSelectorModeInfo[2][0]

  const onclick = (event) => {
    event.preventDefault()
    let arr = selectedDataSource.selected_indexes || []
    let value = event.target.value
    let i = arr.indexOf(value)
    if (i === -1) {
      if (value !== '') {
        arr.push(value)
      }
    } else {
      arr.splice(i, 1)
    }
    arr.sort((a, b) => {
      return a - b
    })
    setDataSource(selected.data_source_id, { selected_indexes: arr })
  }
  return { isMultiple, isDisabled, onclick }
}

export default useSelectedDataPicker
