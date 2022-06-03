import React from 'react'
import { useSelector } from 'react-redux'
import { dataSelectorModeInfo } from '../../../../utils'
import DataSourceNamePicker from './sourceNamePicker'
import SelectedDataPicker from './selectedDataPicker'
import useDataSource from './useDataSource'
import DataSelectorModePicker from './dataSelectorModePicker'
import DiapasonPicker from './diapasonPicker'
import useDataSelector from './useDataSelector'
import getSelectedEntitySelector from '@/redux/selectors/getSelectedEntitySelector'
import maxSourceLengthSelector from '@/redux/selectors/maxSourceLengthSelector'

const DataSelector = () => {
  const selected = useSelector(getSelectedEntitySelector)
  const maxSourceLength = useSelector(maxSourceLengthSelector)

  const { selectedDataSource, dataSourceProps } = useDataSource(
    selected.data_source_id
  )

  const {
    onSingleSelection,
    onDiapasonChange,
    copyToClipboard,
    diapasonFocusedInput,
    onReset,
  } = useDataSelector({ selected, selectedDataSource, dataSourceProps })

  return (
    <div>
      <DataSourceNamePicker />
      <DataSelectorModePicker />
      {dataSourceProps.data_selector_mode === dataSelectorModeInfo[1][0] && (
        <DiapasonPicker
          onfocus={(focused) => {
            diapasonFocusedInput.current = focused
          }}
          onchange={onDiapasonChange}
          max={maxSourceLength}
          from={dataSourceProps.diapason?.from}
          to={dataSourceProps.diapason?.to}
        />
      )}
      {dataSourceProps.data_selector_mode === dataSelectorModeInfo[2][0] && (
        <>
          <button
            disabled={!dataSourceProps.selected_indexes?.length > 0}
            onClick={onReset}
          >
            Сбросить
          </button>
          <button
            disabled={!dataSourceProps.selected_indexes?.length > 0}
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
