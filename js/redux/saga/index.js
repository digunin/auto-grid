import { call, all, spawn } from 'redux-saga/effects'
import modifyImage from './setImageSaga'
import loadingState from './loadingStateSaga'
import changeEntitySaga from './changeEntitySaga'
import updateDataSourceSaga from './updateDataSourceSaga'
import updateDataSourcePropsSaga from './updateDataSourcePropsSaga'
import deletDataSourceSaga from './deleteDataSourceSaga'

export default function* rootSaga() {
  const sagas = [
    modifyImage,
    loadingState,
    changeEntitySaga,
    updateDataSourceSaga,
    updateDataSourcePropsSaga,
    deletDataSourceSaga,
  ]

  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch {
          console.log('saga crashed')
        }
      }
    })
  })

  yield all(retrySagas)
}
