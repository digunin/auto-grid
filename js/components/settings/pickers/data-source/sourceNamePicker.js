import React from 'react'
import useSettings from '../../../useSettings'
import useDataSource from './useDataSource'

const DataSourceNamePicker = () => {
  const {
    selected,
    actions: { changeEntity },
  } = useSettings()

  const { existingNames } = useDataSource()

  return (
    <select
      value={selected.data_source_id}
      name="data-source-names"
      onChange={(e) =>
        changeEntity(selected.id, { data_source_id: e.target.value })
      }
    >
      <option value="">Выберите источник данных</option>
      {existingNames.map((name) => (
        <option key={`ds_${name}`} value={name}>
          {name}
        </option>
      ))}
    </select>
  )
}

export default DataSourceNamePicker
