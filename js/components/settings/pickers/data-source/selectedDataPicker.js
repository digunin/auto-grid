import React from 'react'
import useSettings from '../../../useSettings'
import useSelectedDataPicker from './useSelectedDataPicker'

import useDataSource from './useDataSource'
import Select from '../../../custom-select-element/Select'

const SelectedDataPicker = () => {
  const {
    selected,
    actions: { setDataSource },
  } = useSettings()

  const { selectedDataSource } = useDataSource(selected.data_source_id)

  const { isMultiple, isDisabled } = useSelectedDataPicker(
    selected,
    selectedDataSource,
    setDataSource
  )

  return (
    <Select
      options={selectedDataSource.data || []}
      selectedValues={isMultiple ? selectedDataSource.selected_indexes : []}
      onchange={(arr) => {
        setDataSource(selected.data_source_id, { selected_indexes: arr })
      }}
      multiple={isMultiple}
      disabled={isDisabled}
    />
  )
}

export default SelectedDataPicker
