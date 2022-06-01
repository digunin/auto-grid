import { useDispatch } from 'react-redux'
import { dataSelectorModeInfo } from '../../../../utils'

const useSelectedDataPicker = ({
  dataSourceProps,
  setDataSourceProps,
  onSingleSelection,
}) => {
  const dispatch = useDispatch()
  const isMultiple =
    dataSourceProps.data_selector_mode === dataSelectorModeInfo[2][0]
  const isDisabled =
    dataSourceProps.data_selector_mode === dataSelectorModeInfo[0][0]

  let onchange = (arr) => {
    isMultiple
      ? dispatch(setDataSourceProps({ selected_indexes: arr }))
      : onSingleSelection(arr)
  }

  return { isMultiple, isDisabled, onchange }
}

export default useSelectedDataPicker
