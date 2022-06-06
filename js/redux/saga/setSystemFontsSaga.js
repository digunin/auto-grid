import { put, call } from 'redux-saga/effects'
import { Detector } from '../../utils'
import { systemFonts } from '../../fontFamilies'
import { setSystemFonts } from '../reducers/commonReducer'

function* setSystemFontsWorker() {
  let detector = new Detector()
  let fonts = systemFonts.filter((fontName) => detector.detect(fontName))
  yield put(setSystemFonts(fonts))
}

export default function* systemFontsWatcher() {
  yield call(setSystemFontsWorker)
}
