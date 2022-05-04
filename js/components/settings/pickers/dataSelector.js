import React, { useEffect } from 'react'
import { dataSelectorModeInfo } from '../../../utils'
import useSettings from '../../useSettings'
import DataSourceNamePicker from './data-source/sourceNamePicker'
import SelectedDataPicker from './data-source/selectedDataPicker'
import useDataSource from './data-source/useDataSource'
import DataSelectorMode from './dataSelectorMode'

const DataSelector = ({ onchange }) => {
  const { selected } = useSettings()
  const { selectedData } = useDataSource(selected.data_source_id)

  useEffect(() => {
    onSelectorModeChange(selected.data_selector_mode)
  }, [selected.id, selected.data_source_id, selected.data_selector_mode])

  const onSelectorModeChange = (mode, start = 0, end = 10) => {
    switch (mode) {
      // print-all
      case dataSelectorModeInfo[0][0]:
        onchange(selectedData)
        break
      // print-range
      case dataSelectorModeInfo[1][0]:
        onchange(
          selectedData.slice(
            Math.max(start, 0),
            Math.min(end, selectedData.length)
          )
        )
        break
      // print-selected
      case dataSelectorModeInfo[2][0]:
        onchange([])
        break
    }
  }

  return (
    <div>
      <DataSourceNamePicker />
      <DataSelectorMode selected={selected} onchange={onSelectorModeChange} />
      <SelectedDataPicker />
      <div>{`Выбрано элементов: ${selected.data.length}`}</div>
    </div>
  )
}

export default DataSelector
