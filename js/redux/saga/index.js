import { put, takeEvery, fork } from 'redux-saga/effects'
import { setImageFile, putImage, loadState } from '../reducers/commonReducer'
import { dataURLtoBlob } from '../../utils'
import { setNewState as setCommonState } from '../reducers/commonReducer'
import { setNewState as setDataSetState } from '../reducers/datasetReducer'

function* modifyImage(action) {
  let [file, data_url] = [{ content: null }, null]
  if (action.payload) {
    file = action.payload
    data_url = file.content
    file.size = Math.round((data_url.length / 1024) * 0.75)
    file.size_color =
      file.size <= 200 ? 'green' : file.size <= 500 ? 'orange' : 'red'
    file.content = URL.createObjectURL(dataURLtoBlob(file.content))
  }
  yield put(setImageFile(file, data_url))
}

function* loadingState(action) {
  console.log(action.payload)
  let commonState = action.payload.common
  if (commonState.imagesDataURL?.front?.startsWith('data:image')) {
    commonState.frontImage.content = URL.createObjectURL(
      dataURLtoBlob(commonState.imagesDataURL.front)
    )
  } else {
    commonState.frontImage.content = null
  }
  if (commonState.imagesDataURL?.back?.startsWith('data:image')) {
    commonState.backImage.content = URL.createObjectURL(
      dataURLtoBlob(commonState.imagesDataURL.back)
    )
  } else {
    commonState.backImage.content = null
  }
  yield put(setCommonState(commonState))
  yield put(setDataSetState(action.payload.dataSet))
}

export default function* rootSaga() {
  yield takeEvery(putImage, modifyImage)
  yield takeEvery(loadState, loadingState)
}
