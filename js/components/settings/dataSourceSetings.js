import React from 'react'
import DataSourceList from './pickers/data-source/dataSourceList'
import DataPicker from './pickers/data-source/dataPicker'
import useSettings from '../useSettings'

const DataSourceSettings = () => {
  let { data_source } = useSettings()
  let source_names = Object.keys(data_source)
  return (
    <>
      <DataSourceList names={source_names} />
      <DataPicker mode="gen" />
    </>
  )
}

export default DataSourceSettings
