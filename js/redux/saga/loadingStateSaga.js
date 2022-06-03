import { put } from 'redux-saga/effects'
import { setNewState as setCommonState } from '../reducers/commonReducer'
import { setNewState as setDataSetState } from '../reducers/datasetReducer'
import { dataURLtoBlob } from '../../utils'

function* loadingState(action) {
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

export default loadingState
