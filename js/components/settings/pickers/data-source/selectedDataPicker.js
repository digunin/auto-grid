import React from 'react'
import useSelectedDataPicker from './useSelectedDataPicker'
import getSelectedEntitySelector from '@/redux/selectors/getSelectedEntitySelector'
import useDataSource from './useDataSource'
import Select from '../../../custom-select-element/Select'
import { useSelector } from 'react-redux'

const SelectedDataPicker = ({ onSingleSelection }) => {
  const selected = useSelector(getSelectedEntitySelector)

  const { setDataSource, selectedDataSource } = useDataSource(
    selected.data_source_id
  )

  const { isMultiple, isDisabled, onchange } = useSelectedDataPicker(
    selected,
    selectedDataSource,
    setDataSource,
    onSingleSelection
  )

  return (
    <Select
      options={selectedDataSource.data || []}
      selectedValues={isMultiple ? selectedDataSource.selected_indexes : []}
      onchange={onchange}
      multiple={isMultiple}
      disabled={isDisabled}
    />
  )
}

export default SelectedDataPicker
