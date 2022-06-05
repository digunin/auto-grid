import { put, select, takeEvery } from 'redux-saga/effects'
import { selectDataFromSource } from '../../utils'
import {
  setCardsCount,
  setEntitiesData,
  setDataSourceProps,
} from '../reducers/datasetReducer'

function* updateDataSourcePropsWorker(action) {
  let dataSource = yield select((state) => state.dataSet.dataSource)
  let { data_selector_mode, selected_indexes, diapason } = dataSource
  let sourceNames = Object.keys(dataSource.sources)
  for (let i = 0; i < sourceNames.length; i++) {
    let data = dataSource.sources[sourceNames[i]].data
    yield put(
      setEntitiesData(
        sourceNames[i],
        selectDataFromSource[data_selector_mode](data, {
          selected_indexes,
          diapason,
        })
      )
    )
  }
  yield put(setCardsCount())
}

export default function* updateDataSourcePropsWatcher() {
  yield takeEvery(setDataSourceProps, updateDataSourcePropsWorker)
}
