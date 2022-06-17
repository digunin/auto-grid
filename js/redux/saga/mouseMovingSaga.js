import { select, throttle, put } from 'redux-saga/effects'
import { mouseMoving } from '../reducers/commonReducer'
import { changeEntity } from '../reducers/datasetReducer'
import selector from '../selectors/getSelectedEntitySelector'

function* mouseMovingWorker(action) {
  let isDragEnabled = yield select((state) => state.common.dragEnabled)
  if (isDragEnabled) {
    let selectedEntity = yield select(selector)
    if (selectedEntity) {
      let { clientX, clientY, pageX, pageY, screenX, screenY } = action.payload
      console.log({ clientX, clientY, pageX, pageY, screenX, screenY })
    }
  }
}

export default function* mouseMovingWatcher() {
  yield throttle(200, mouseMoving, mouseMovingWorker)
}
