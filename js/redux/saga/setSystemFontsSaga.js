import { put, call } from 'redux-saga/effects'
import { setSystemFonts } from '../reducers/commonReducer'

function* setSystemFontsWorker() {
  yield put(setSystemFonts(window.loaded_sys_fonts_ ?? ['Arial']))
}

export default function* systemFontsWatcher() {
  yield call(setSystemFontsWorker)
}
