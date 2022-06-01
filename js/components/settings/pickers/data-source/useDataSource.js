import { useSelector } from 'react-redux'
import {
  setDataSource,
  setDataSourceProps,
  editDataSource,
  deleteDataSource,
} from '@/redux/reducers/datasetReducer'

const useDataSource = (name = '') => {
  const dataSource = useSelector((state) => state.dataSet.dataSource)

  return {
    editing_source_name: dataSource?.editing_source_name || '',
    existingNames: Object.keys(dataSource?.sources || {}),
    createMode: dataSource?.editing_source_name === '',
    editMode: dataSource?.editing_source_name !== '',
    setDataSource,
    setDataSourceProps,
    editDataSource,
    deleteDataSource,
    editingData:
      dataSource?.editing_source_name === '' || !dataSource?.editing_source_name
        ? []
        : dataSource.sources[dataSource.editing_source_name].data || [],
    selectedDataSource:
      name === '' || !dataSource?.sources
        ? { data: [] }
        : { ...dataSource.sources[name] },
    dataSourceProps: {
      diapason: dataSource.diapason,
      selected_indexes: dataSource.selected_indexes,
      data_selector_mode: dataSource.data_selector_mode,
    },
  }
}

export default useDataSource
