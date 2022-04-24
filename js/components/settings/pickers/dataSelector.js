import React, { useEffect, useState } from 'react'
import useDataSource from './data-source/useDataSource'

const DataSelector = ({ onchange, selected }) => {
  const [selectedSource, setSelectedSource] = useState('')
  const [selectedValues, setSelectedValues] = useState([])
  const { existingNames, selectedData } = useDataSource(selectedSource)
  useEffect(() => {
    onchange(selectedData)
  }, [selectedSource])
  return (
    <div>
      <select
        name="data-source-names"
        onChange={(e) => {
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
      <select
        style={{ width: '100%', fontFamily: 'monospace' }}
        size="20"
        name="data-source-values"
        multiple
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
