import React from 'react'
import useSelectedDataPicker from './useSelectedDataPicker'
import getSelectedEntitySelector from '@/redux/selectors/getSelectedEntitySelector'
import useDataSource from './useDataSource'
import Select from '../../../custom-select-element/Select'
import { useSelector } from 'react-redux'

const SelectedDataPicker = ({ onSingleSelection }) => {
  const selected = useSelector(getSelectedEntitySelector)

  const { setDataSourceProps, selectedDataSource, dataSourceProps } =
    useDataSource(selected.data_source_id)

  const { isMultiple, isDisabled, onchange } = useSelectedDataPicker({
    dataSourceProps,
    setDataSourceProps,
    onSingleSelection,
  })

  return (
    <Select
      options={selectedDataSource.data || []}
      selectedValues={isMultiple ? dataSourceProps.selected_indexes : []}
      onchange={onchange}
      multiple={isMultiple}
      disabled={isDisabled}
      orderNumberPad={String(selectedDataSource.data.length).length + 2}
    />
  )
}

export default SelectedDataPicker
