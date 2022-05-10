import React, { useEffect } from 'react'
import { dataSelectorModeInfo } from '../../../../utils'
import useSettings from '../../../useSettings'
import DataSourceNamePicker from './sourceNamePicker'
import SelectedDataPicker from './selectedDataPicker'
import useDataSource from './useDataSource'
import DataSelectorModePicker from './dataSelectorModePicker'
import DiapasonPicker from './diapasonPicker'

const DataSelector = () => {
  const {
    selected,
    actions: { changeEntity, setDataSource },
  } = useSettings()

  const { selectedDataSource } = useDataSource(selected.data_source_id)

  useEffect(() => {
    onSelectorModeChange(selectedDataSource.data_selector_mode)
  }, [
    selected.id,
    selected.data_source_id,
    selectedDataSource.data_selector_mode,
    JSON.stringify(selectedDataSource.selected_indexes),
    JSON.stringify(selectedDataSource.diapason),
  ])

  const onSelectorModeChange = (mode) => {
    let start = selectedDataSource.diapason?.from || 0
    let end =
      selectedDataSource.diapason?.to || selectedDataSource.data.length - 1
    end = end < 0 ? 0 : end
    switch (mode) {
      // print-all
      case dataSelectorModeInfo[0][0]:
        changeEntity(selected.id, { data: selectedDataSource.data })
        break
      // print-range
      case dataSelectorModeInfo[1][0]:
        changeEntity(selected.id, {
          data: selectedDataSource.data.slice(start, end + 1),
        })
        break
      // print-selected
      case dataSelectorModeInfo[2][0]:
        // changeEntity(selected.id, { data: [] })
        let tmp =
          selectedDataSource.selected_indexes?.map(
            (i) => selectedDataSource.data[i]
          ) || []
        console.log(tmp)
        changeEntity(selected.id, {
          data: tmp,
        })
        break
    }
  }

  const onDiapasonChange = (from, to) => {
    if (from > to) {
      ;[from, to] = [to, from]
    }
    // onSelectorModeChange(dataSelectorModeInfo[1][0], from - 1, to - 1)
    setDataSource(selected.data_source_id, { diapason: { from, to } })
  }

  return (
    <div>
      <DataSourceNamePicker />
      <DataSelectorModePicker />
      {selectedDataSource.data_selector_mode === dataSelectorModeInfo[1][0] && (
        <DiapasonPicker
          onchange={onDiapasonChange}
          max={selectedDataSource.data.length}
          from={selectedDataSource.diapason?.from}
          to={selectedDataSource.diapason?.to}
        />
      )}
      <SelectedDataPicker />
      <div>{`Выбрано элементов: ${selected.data.length}`}</div>
    </div>
  )
}

export default DataSelector
