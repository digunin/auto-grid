import React from 'react'
import { dataSelectorModeInfo } from '../../../../utils'
import useSettings from '../../../useSettings'
import DataSourceNamePicker from './sourceNamePicker'
import SelectedDataPicker from './selectedDataPicker'
import useDataSource from './useDataSource'
import DataSelectorModePicker from './dataSelectorModePicker'
import DiapasonPicker from './diapasonPicker'
import useDataSelector from './useDataSelector'

const DataSelector = () => {
  const {
    selected,
    actions: { setEntitiesData, setDataSource, setCardsCount },
  } = useSettings()

  const { selectedDataSource } = useDataSource(selected.data_source_id)

  const {
    onSingleSelection,
    onDiapasonChange,
    copyToClipboard,
    diapasonFocusedInput,
  } = useDataSelector(
    setEntitiesData,
    setDataSource,
    setCardsCount,
    selected,
    selectedDataSource
  )

  return (
    <div>
      <DataSourceNamePicker />
      <DataSelectorModePicker />
      {selectedDataSource.data_selector_mode === dataSelectorModeInfo[1][0] && (
        <DiapasonPicker
          onfocus={(focused) => {
            diapasonFocusedInput.current = focused
          }}
          onchange={onDiapasonChange}
          max={selectedDataSource.data.length}
          from={selectedDataSource.diapason?.from}
          to={selectedDataSource.diapason?.to}
        />
      )}
      {selectedDataSource.data_selector_mode === dataSelectorModeInfo[2][0] && (
        <>
          <button
            disabled={!selectedDataSource.selected_indexes?.length > 0}
            onClick={() =>
              setDataSource(selected.data_source_id, { selected_indexes: [] })
            }
          >
            Сбросить
          </button>
          <button
            disabled={!selectedDataSource.selected_indexes?.length > 0}
            onClick={copyToClipboard}
          >
            Скопировать
          </button>
        </>
      )}
      <SelectedDataPicker onSingleSelection={onSingleSelection} />
      <div>{`Выбрано элементов: ${selected.data.length}`}</div>
    </div>
  )
}

export default DataSelector
