import { put, select, takeEvery } from 'redux-saga/effects'
import { selectDataFromSource } from '../../utils'
import {
  setCardsCount,
  setEntitiesData,
  setDataSource,
  setDataSourceProps,
} from '../reducers/datasetReducer'
import maxSourceLengthSelector from '../selectors/maxSourceLengthSelector'

function* updateDataSourceSaga(action) {
  let dataSource = yield select((state) => state.dataSet.dataSource)
  let { data_selector_mode, selected_indexes, diapason } = dataSource
  let { name, data } = action.payload
  let new_data = selectDataFromSource[data_selector_mode](data, {
    selected_indexes,
    diapason,
  })
  let maxSourceLength = yield select(maxSourceLengthSelector)
  if (diapason.to > maxSourceLength) {
    yield put(
      setDataSourceProps({
        diapason: { from: diapason.from || 1, to: maxSourceLength },
      })
    )
  } else {
    yield put(setEntitiesData(name, new_data))
    yield put(setCardsCount())
  }
}

export default function* worker() {
  yield takeEvery(setDataSource, updateDataSourceSaga)
}
