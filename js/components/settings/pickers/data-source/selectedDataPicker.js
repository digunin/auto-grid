import React from 'react'
import useSettings from '../../../useSettings'
import useSelectedDataPicker from './useSelectedDataPicker'

import useDataSource from './useDataSource'
import Select from '../../../custom-select-element/Select'

const SelectedDataPicker = ({ onSingleSelection }) => {
  const {
    selected,
    actions: { setDataSource },
  } = useSettings()

  const { selectedDataSource } = useDataSource(selected.data_source_id)

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
