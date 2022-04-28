import React, { useEffect, useState } from 'react'
import { dataSelectorModeInfo } from '../../../utils'
import useSettings from '../../useSettings'
import useDataSource from './data-source/useDataSource'
import DataSelectorMode from './dataSelectorMode'

const DataSelector = ({ onchange }) => {
  const {
    selected,
    actions: { changeEntity },
  } = useSettings()
  const { existingNames, selectedData } = useDataSource(selected.data_source_id)

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
      <select
        value={selected.data_source_id}
        name="data-source-names"
        onChange={(e) => {
          changeEntity(selected.id, { data_source_id: e.target.value })
        }}
      >
        <option value="">Выберите источник данных</option>
        {existingNames.map((name) => (
          <option key={`ds_${name}`} value={name}>
            {name}
          </option>
        ))}
      </select>
      <DataSelectorMode selected={selected} onchange={onSelectorModeChange} />
      <select
        className="data-source-select"
        style={{ width: '100%', fontFamily: 'monospace' }}
        size="20"
        name="data-source-values"
        multiple={selected.data_selector_mode === dataSelectorModeInfo[2][0]}
        disabled={selected.data_selector_mode === dataSelectorModeInfo[0][0]}
        onChange={(e) => {
          let arr = Array.from(e.target.selectedOptions, (opt) => opt.value)
          onchange(arr)
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
      <div>{`Выбрано элементов: ${selected.data.length}`}</div>
    </div>
  )
}

export default DataSelector
