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
    actions: { setEntitiesData, setDataSource, setCardsCount },
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
    let start = selectedDataSource.diapason?.from - 1 || 0
    let end = selectedDataSource.diapason?.to || selectedDataSource.data.length
    end = end < 0 ? 0 : end
    switch (mode) {
      // print-all
      case dataSelectorModeInfo[0][0]:
        setEntitiesData(selected.data_source_id, selectedDataSource.data)
        setCardsCount()
        break
      // print-range
      case dataSelectorModeInfo[1][0]:
        setEntitiesData(
          selected.data_source_id,
          selectedDataSource.data.slice(start, end)
        )
        setCardsCount()
        break
      // print-selected
      case dataSelectorModeInfo[2][0]:
        let tmp =
          selectedDataSource.selected_indexes?.map(
            (i) => selectedDataSource.data[i]
          ) || []
        setEntitiesData(selected.data_source_id, tmp)
        setCardsCount()
        break
    }
  }

  const onDiapasonChange = (from, to) => {
    if (from > to) {
      ;[from, to] = [to, from]
    }
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
      {selectedDataSource.data_selector_mode === dataSelectorModeInfo[2][0] && (
        <button
          disabled={!selectedDataSource.selected_indexes?.length > 0}
          onClick={() =>
            setDataSource(selected.data_source_id, { selected_indexes: [] })
          }
        >
          Сбросить выделенное
        </button>
      )}
      <SelectedDataPicker />
      <div>{`Выбрано элементов: ${selected.data.length}`}</div>
    </div>
  )
}

export default DataSelector
