import { put, call } from 'redux-saga/effects'
import { Detector } from '../../utils'
import { setSystemFonts } from '../reducers/commonReducer'

function* setSystemFontsWorker() {
  const systemFonts = window.loaded_sys_fonts_ ?? ['Arial']
  let detector = new Detector()
  let fonts = systemFonts.filter((fontName) => detector.detect(fontName))
  yield put(setSystemFonts(fonts))
}

export default function* systemFontsWatcher() {
  yield call(setSystemFontsWorker)
}
