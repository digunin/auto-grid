import React from 'react'
import useSettings from '../../../useSettings'
import useSelectedDataPicker from './useSelectedDataPicker'

import useDataSource from './useDataSource'

const SelectedDataPicker = () => {
  const {
    selected,
    actions: { setDataSource },
  } = useSettings()

  const { selectedDataSource } = useDataSource(selected.data_source_id)

  const { isMultiple, isDisabled, onclick } = useSelectedDataPicker(
    selected,
    selectedDataSource,
    setDataSource
  )

  return (
    <select
      className="data-source-select"
      style={{ width: '100%', fontFamily: 'monospace' }}
      size="20"
      name="data-source-values"
      value={isMultiple ? selectedDataSource.selected_indexes : ''}
      multiple={isMultiple}
      disabled={isDisabled}
      // onClick={onclick} onclick (from hook) conflicts with default behavior
      onChange={(e) => {
        let arr = Array.from(e.target.selectedOptions, (opt) => opt.value)
        setDataSource(selected.data_source_id, { selected_indexes: arr })
      }}
    >
      {selectedDataSource.data?.map((value, i) => {
        let prefix = `${i + 1}`
        return (
          <option key={`${i}-${value}`} value={i}>{`${prefix.padEnd(
            10,
            '\u00A0'
          )}${value}`}</option>
        )
      })}
    </select>
  )
}

export default SelectedDataPicker
