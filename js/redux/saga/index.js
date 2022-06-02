import { takeEvery } from 'redux-saga/effects'
import { putImage, loadState } from '../reducers/commonReducer'
import {
  changeEntity,
  setDataSource,
  setDataSourceProps,
} from '../reducers/datasetReducer'
import modifyImage from './setImageSaga'
import loadingState from './loadingStateSaga'
import changeEntitySaga from './changeEntitySaga'
import {
  updateDataSourceSaga,
  updateDataSourcePropsSaga,
} from './updateDataSourceSaga'

export default function* rootSaga() {
  yield takeEvery(putImage, modifyImage)
  yield takeEvery(loadState, loadingState)
  yield takeEvery(changeEntity, changeEntitySaga)
  yield takeEvery(setDataSource, updateDataSourceSaga)
  yield takeEvery(setDataSourceProps, updateDataSourcePropsSaga)
}
