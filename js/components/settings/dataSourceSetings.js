import React, { useEffect, useState } from 'react'
import DataSourceList from './pickers/data-source/dataSourceList'
import DataPicker from './pickers/data-source/dataPicker'
import useDataSource from './pickers/data-source/useDataSource'
import useSettings from '../useSettings'

const DataSourceSettings = () => {
  let { setDataSource, editDataSource, deleteDataSource, editing_source_name } =
    useDataSource()
  let {
    actions: { setCardsCount },
  } = useSettings()
  const [showDataPicker, setShow] = useState(false)

  useEffect(() => {
    return () => editDataSource('')
  }, [])

  let onSourceListClick = (name = null) => {
    setShow(true)
    editDataSource(name ? name : '')
  }

  let onDataPickerSubmit = (name, data) => {
    setDataSource(name, { data })
    editDataSource('')
    setShow(false)
  }

  let onDelete = (name) => {
    if (name == editing_source_name) {
      editDataSource('')
      setShow(false)
    }
    deleteDataSource(name)
    setCardsCount()
  }

  return (
    <>
      <DataSourceList onclick={onSourceListClick} ondelete={onDelete} />
      {showDataPicker && <DataPicker onsubmit={onDataPickerSubmit} />}
    </>
  )
}

export default DataSourceSettings
