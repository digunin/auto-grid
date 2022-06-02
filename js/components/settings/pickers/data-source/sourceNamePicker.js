import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useDataSource from './useDataSource'
import { changeEntity } from '@/redux/reducers/datasetReducer'
import getSelectedEntitySelector from '@/redux/selectors/getSelectedEntitySelector'

const DataSourceNamePicker = () => {
  const dispatch = useDispatch()
  const selected = useSelector(getSelectedEntitySelector)

  const { existingNames } = useDataSource()

  return (
    <select
      value={selected.data_source_id}
      name="data-source-names"
      onChange={(e) => {
        dispatch(changeEntity(selected.id, { data_source_id: e.target.value }))
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
