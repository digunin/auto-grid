import { useSelector } from 'react-redux'
import {
  setDataSource,
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
  }
}

export default useDataSource
