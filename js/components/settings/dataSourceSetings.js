import React, { useState } from 'react'
import DataSourceList from './pickers/data-source/dataSourceList'
import DataPicker from './pickers/data-source/dataPicker'
import useSettings from '../useSettings'

const DataSourceSettings = () => {
  let {
    data_source: { editing_source_name, data },
  } = useSettings()
  let source_names = Object.keys(data)
  return (
    <>
      <DataSourceList names={source_names} />
      <DataPicker source_names={source_names} mode="man" />
    </>
  )
}

export default DataSourceSettings
