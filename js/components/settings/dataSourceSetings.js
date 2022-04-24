import React, { useEffect, useState } from 'react'
import DataSourceList from './pickers/data-source/dataSourceList'
import DataPicker from './pickers/data-source/dataPicker'
import useSettings from '../useSettings'

const DataSourceSettings = () => {
  const [showDataPicker, setShow] = useState(false)
  let {
    data_source: { editing_source_name, data },
    actions: { setDataSource, editDataSource },
  } = useSettings()

  useEffect(() => {
    return () => editDataSource('')
  }, [])

  let existingNames = Object.keys(data)

  let onSourceListClick = (name = null) => {
    setShow(true)
    editDataSource(name ? name : '')
  }

  let onDataPickerSubmit = (name, data) => {
    setDataSource(name, data)
    editDataSource('')
    setShow(false)
  }

  return (
    <>
      <DataSourceList
        editing_source_name={editing_source_name}
        onclick={onSourceListClick}
        existingNames={existingNames}
      />
      {showDataPicker && (
        <DataPicker
          editingData={
            editing_source_name.length == 0
              ? []
              : [...data[editing_source_name]]
          }
          existingNames={existingNames}
          editing_source_name={editing_source_name}
          onsubmit={onDataPickerSubmit}
        />
      )}
    </>
  )
}

export default DataSourceSettings
