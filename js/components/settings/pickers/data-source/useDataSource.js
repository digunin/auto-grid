import { useContext } from 'react'
import Context from '../../../../store/settingContext'

const useDataSource = () => {
  const { actions, data_source } = useContext(Context)

  return {
    editing_source_name: data_source.editing_source_name,
    existingNames: Object.keys(data_source.data),
    createMode: data_source.editing_source_name === '',
    editMode: data_source.editing_source_name !== '',
    setDataSource: actions.setDataSource,
    editDataSource: actions.editDataSource,
    editingData:
      data_source.editing_source_name === ''
        ? []
        : [...data_source.data[data_source.editing_source_name]],
  }
}

export default useDataSource
