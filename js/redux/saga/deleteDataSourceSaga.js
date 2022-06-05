import { put, select, takeEvery } from 'redux-saga/effects'
import {
  setDataSourceProps,
  deleteDataSource,
} from '../reducers/datasetReducer'
import maxSourceLengthSelector from '../selectors/maxSourceLengthSelector'

function* deletDataSourceSaga(action) {
  let diapason = yield select((state) => state.dataSet.dataSource.diapason)
  let maxSourceLength = yield select(maxSourceLengthSelector)
  if (diapason.to > maxSourceLength) {
    yield put(
      setDataSourceProps({
        diapason: { from: diapason.from || 1, to: maxSourceLength },
      })
    )
  }
}

export default function* worker() {
  yield takeEvery(deleteDataSource, deletDataSourceSaga)
}
