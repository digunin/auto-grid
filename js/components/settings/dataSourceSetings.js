import React, { useState } from 'react'
import DataSourceList from './pickers/data-source/dataSourceList'
import DataPicker from './pickers/data-source/dataPicker'
import useSettings from '../useSettings'

const DataSourceSettings = () => {
  let {
    data_source: { editing_source_name, data },
    actions: { setDataSource },
  } = useSettings()

  let source_names = Object.keys(data)

  return (
    <>
      <DataSourceList names={source_names} />
      <DataPicker
        setDataSource={setDataSource}
        source_names={source_names}
        mode="man"
      />
    </>
  )
}

export default DataSourceSettings
