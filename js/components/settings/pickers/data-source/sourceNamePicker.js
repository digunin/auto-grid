import React from 'react'
import useSettings from '../../../useSettings'
import useDataSource from './useDataSource'

const DataSourceNamePicker = () => {
  const {
    selected,
    actions: { changeEntity, setCardsCount, setEntitiesData },
  } = useSettings()

  const { existingNames } = useDataSource()

  return (
    <select
      value={selected.data_source_id}
      name="data-source-names"
      onChange={(e) => {
        let name = e.target.value
        let data = name === '' ? [] : selected.data
        changeEntity(selected.id, { data_source_id: e.target.value, data })
        setCardsCount()
      }}
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
