import { useDispatch } from 'react-redux'
import { dataSelectorModeInfo } from '../../../../utils'

const useSelectedDataPicker = (
  selected,
  selectedDataSource,
  setDataSource,
  onSingleSelection
) => {
  const dispatch = useDispatch()
  const isMultiple =
    selectedDataSource.data_selector_mode === dataSelectorModeInfo[2][0]
  const isDisabled =
    selectedDataSource.data_selector_mode === dataSelectorModeInfo[0][0]

  let onchange = (arr) => {
    isMultiple
      ? dispatch(
          setDataSource(selected.data_source_id, { selected_indexes: arr })
        )
      : onSingleSelection(arr)
  }

  return { isMultiple, isDisabled, onchange }
}

export default useSelectedDataPicker
