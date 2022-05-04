import React from 'react'
import useSettings from '../../../useSettings'
import { dataSelectorModeInfo } from '../../../../utils'
import useDataSource from './useDataSource'

const SelectedDataPicker = () => {
  const {
    selected,
    actions: { changeEntity },
  } = useSettings()

  const { selectedData } = useDataSource(selected.data_source_id)

  return (
    <select
      className="data-source-select"
      style={{ width: '100%', fontFamily: 'monospace' }}
      size="20"
      name="data-source-values"
      multiple={selected.data_selector_mode === dataSelectorModeInfo[2][0]}
      disabled={selected.data_selector_mode === dataSelectorModeInfo[0][0]}
      onChange={(e) => {
        let arr = Array.from(e.target.selectedOptions, (opt) => opt.value)
        changeEntity(selected.id, { data: arr })
      }}
    >
      {selectedData.map((value, i) => {
        let prefix = `${i + 1}`
        return (
          <option key={value} value={value}>{`${prefix.padEnd(
            10,
            '\u00A0'
          )}${value}`}</option>
        )
      })}
    </select>
  )
}

export default SelectedDataPicker
