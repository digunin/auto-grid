import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataSourceList from './pickers/data-source/dataSourceList'
import DataPicker from './pickers/data-source/dataPicker'
import { setCardsCount } from '@/redux/reducers/datasetReducer'
import {
  setDataSource,
  editDataSource,
  deleteDataSource,
} from '@/redux/reducers/datasetReducer'

const DataSourceSettings = () => {
  const dispatch = useDispatch()
  let editing_source_name = useSelector(
    (state) => state.dataSet.dataSource.editing_source_name
  )
  const [showDataPicker, setShow] = useState(false)

  useEffect(() => {
    return () => dispatch(editDataSource(''))
  }, [])

  let onSourceListClick = (name = null) => {
    setShow(true)
    dispatch(editDataSource(name ? name : ''))
  }

  let onDataPickerSubmit = (name, data) => {
    dispatch(setDataSource(name, data))
    dispatch(editDataSource(''))
    setShow(false)
  }

  let onDelete = (name) => {
    if (name == editing_source_name) {
      dispatch(editDataSource(''))
      setShow(false)
    }
    dispatch(deleteDataSource(name))
    dispatch(setCardsCount())
  }

  return (
    <>
      <DataSourceList onclick={onSourceListClick} ondelete={onDelete} />
      {showDataPicker && <DataPicker onsubmit={onDataPickerSubmit} />}
    </>
  )
}

export default DataSourceSettings
