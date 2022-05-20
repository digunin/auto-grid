import { useContext } from 'react'
import Context from '../../../../store/settingContext'

const useDataSource = (name = '') => {
  const { actions, data_source } = useContext(Context)

  return {
    editing_source_name: data_source?.editing_source_name || '',
    existingNames: Object.keys(data_source?.sources || {}),
    createMode: data_source?.editing_source_name === '',
    editMode: data_source?.editing_source_name !== '',
    setDataSource: actions.setDataSource,
    editDataSource: actions.editDataSource,
    deleteDataSource: actions.deleteDataSource,
    editingData:
      data_source?.editing_source_name === '' ||
      !data_source?.editing_source_name
        ? []
        : data_source.sources[data_source.editing_source_name].data || [],
    selectedDataSource:
      name === '' || !data_source?.sources
        ? { data: [] }
        : { ...data_source.sources[name] },
  }
}

export default useDataSource
