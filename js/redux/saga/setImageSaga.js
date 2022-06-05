import { put, takeEvery } from 'redux-saga/effects'
import { setImageFile, putImage } from '../reducers/commonReducer'
import { dataURLtoBlob } from '../../utils'

function* modifyImageWorker(action) {
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

export default function* modifyImageWatcher() {
  yield takeEvery(putImage, modifyImageWorker)
}
