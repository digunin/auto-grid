import { put, call } from 'redux-saga/effects'
import { Detector, possibleFonts } from '../../utils'
import { setSystemFonts } from '../reducers/commonReducer'

function* setSystemFontsWorker() {
  let detector = new Detector()
  let fonts = possibleFonts.filter((fontName) => detector.detect(fontName))
  yield put(setSystemFonts(fonts))
}

export default function* systemFontsWatcher() {
  yield call(setSystemFontsWorker)
}
