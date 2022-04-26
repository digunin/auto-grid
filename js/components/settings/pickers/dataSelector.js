import React, { useEffect, useState } from 'react'
import { dataSelectorModeInfo } from '../../../utils'
import useSettings from '../../useSettings'
import useDataSource from './data-source/useDataSource'
import DataSelectorMode from './dataSelectorMode'

const DataSelector = ({ onchange, selected }) => {
  const [selectedSource, setSelectedSource] = useState(selected.data_source_id)
  const [selectedValues, setSelectedValues] = useState([])
  const { existingNames, selectedData } = useDataSource(selectedSource)
  const {
    actions: { changeEntity },
  } = useSettings()

  useEffect(() => {
    onSelectorModeChange(selected.data_selector_mode)
  }, [selected.data_source_id, selected.data_selector_mode])

  useEffect(() => {
    onchange(selectedValues)
  }, [selectedValues])

  const onSelectorModeChange = (mode, start = 0, end = 10) => {
    switch (mode) {
      // print-all
      case dataSelectorModeInfo[0][0]:
        setSelectedValues(selectedData)
        break
      // print-range
      case dataSelectorModeInfo[1][0]:
        setSelectedValues(
          selectedData.slice(
            Math.max(start, 0),
            Math.min(end, selectedData.length)
          )
        )
        break
      // print-selected
      case dataSelectorModeInfo[2][0]:
        setSelectedValues([])
        break
    }
  }

  return (
    <div>
      <select
        defaultValue={selected.data_source_id}
        name="data-source-names"
        onChange={(e) => {
          changeEntity(selected.id, { data_source_id: e.target.value })
          setSelectedSource(e.target.value)
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
          setSelectedValues(arr)
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
      <div>{`Выбрано элементов: ${selectedValues.length}`}</div>
    </div>
  )
}

export default DataSelector
