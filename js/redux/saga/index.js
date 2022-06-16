import { call, all, spawn } from 'redux-saga/effects'
import modifyImage from './setImageSaga'
import loadingState from './loadingStateSaga'
import changeEntitySaga from './changeEntitySaga'
import updateDataSourceSaga from './updateDataSourceSaga'
import updateDataSourcePropsSaga from './updateDataSourcePropsSaga'
import deletDataSourceSaga from './deleteDataSourceSaga'
import setSystemFontsSaga from './setSystemFontsSaga'
import dragAndDropSaga from './dragAndDropSaga'

export default function* rootSaga() {
  const sagas = [
    modifyImage,
    loadingState,
    changeEntitySaga,
    updateDataSourceSaga,
    updateDataSourcePropsSaga,
    deletDataSourceSaga,
    setSystemFontsSaga,
    dragAndDropSaga,
  ]

  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.error(e)
        }
      }
    })
  })

  yield all(retrySagas)
}
