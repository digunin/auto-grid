import { put, select, takeEvery } from 'redux-saga/effects'
import { selectDataFromSource } from '../../utils'
import { changeEntity, setCardsCount } from '../reducers/datasetReducer'

function* changeEntityDataSourceIDWorker(action) {
  let { id, new_props } = action.payload
  if ('data_source_id' in new_props) {
    let { dataSource } = yield select((state) => state.dataSet)
    let { data_selector_mode, sources, selected_indexes, diapason } = dataSource
    let data =
      new_props.data_source_id === ''
        ? []
        : selectDataFromSource[data_selector_mode](
            sources[new_props.data_source_id].data,
            {
              selected_indexes,
              diapason,
            }
          )
    yield put(changeEntity(id, { data }))
    yield put(setCardsCount())
  }
}

export default function* changeEntityWatcher() {
  yield takeEvery(changeEntity, changeEntityDataSourceIDWorker)
}
