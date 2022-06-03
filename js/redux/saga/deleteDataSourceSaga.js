import { put, select } from 'redux-saga/effects'
import { setDataSourceProps } from '../reducers/datasetReducer'
import maxSourceLengthSelector from '../selectors/maxSourceLengthSelector'

export function* deletDataSourceSaga(action) {
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
