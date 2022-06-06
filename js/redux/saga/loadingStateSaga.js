import { put, takeEvery } from 'redux-saga/effects'
import { nanoid } from '@reduxjs/toolkit'
import { defaultObjects } from '../reducers/initialState'
import {
  loadState,
  setNewState as setCommonState,
} from '../reducers/commonReducer'
import { setNewState as setDataSetState } from '../reducers/datasetReducer'
import { dataURLtoBlob } from '../../utils'

function* loadingStateWorker(action) {
  let loadedState = { ...action.payload }

  let commonState = {}
  let datasetState = {}

  if ('common' in loadedState) {
    commonState = loadedState.common
    datasetState = loadedState.dataSet
  } else {
    commonState = loadedState
    commonState.imagesDataURL = {
      front: commonState.frontImage?.content || null,
      back: commonState.backImage?.content || null,
    }
    commonState.frontImage = { content: null }
    commonState.backImage = { content: null }
    datasetState = {
      entities: loadedState.entities,
      dataSource: { ...defaultObjects.dataSource },
      cardsCount: 0,
    }
    let tmp = {}
    datasetState.entities.forEach((element) => {
      tmp[nanoid()] = { data: element.data }
      element.data = []
    })
    datasetState.dataSource.sources = tmp
  }

  if ('systemFonts' in commonState) {
    delete commonState.systemFonts
  }

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
  yield put(setDataSetState(datasetState))
}

export default function* loadingStateWatcher() {
  yield takeEvery(loadState, loadingStateWorker)
}
