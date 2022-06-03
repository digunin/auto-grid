import { takeEvery } from 'redux-saga/effects'
import { putImage, loadState } from '../reducers/commonReducer'
import {
  changeEntity,
  deleteDataSource,
  setDataSource,
  setDataSourceProps,
} from '../reducers/datasetReducer'
import modifyImage from './setImageSaga'
import loadingState from './loadingStateSaga'
import changeEntitySaga from './changeEntitySaga'
import { updateDataSourceSaga } from './updateDataSourceSaga'
import { updateDataSourcePropsSaga } from './updateDataSourcePropsSaga'
import { deletDataSourceSaga } from './deleteDataSourceSaga'

export default function* rootSaga() {
  yield takeEvery(putImage, modifyImage)
  yield takeEvery(loadState, loadingState)
  yield takeEvery(changeEntity, changeEntitySaga)
  yield takeEvery(setDataSource, updateDataSourceSaga)
  yield takeEvery(setDataSourceProps, updateDataSourcePropsSaga)
  yield takeEvery(deleteDataSource, deletDataSourceSaga)
}
