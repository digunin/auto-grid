import { select, takeEvery } from 'redux-saga/effects'
import { enableDrag } from '../reducers/commonReducer'
import selector from '../selectors/getSelectedEntitySelector'

function* dragAndDropWorker(action) {
  console.log(action.payload)
  let selectedEntity = yield select(selector)
  console.log(selectedEntity?.id)
}

export default function* dragAndDropWatcher() {
  yield takeEvery(enableDrag, dragAndDropWorker)
}
