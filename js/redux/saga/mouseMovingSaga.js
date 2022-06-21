import { select, throttle, put } from 'redux-saga/effects'
import { mouseMoving } from '../reducers/commonReducer'
import { changeEntity } from '../reducers/datasetReducer'
import selector from '../selectors/getSelectedEntitySelector'
import { getPageOffsetRect, getNewEntityPos } from '../../utils'

function* mouseMovingWorker(action) {
  let startPoints = yield select((state) => state.common.dragEnabled)
  if (startPoints) {
    let selectedEntity = yield select(selector)
    let blockRect = getPageOffsetRect(
      document.getElementsByClassName('block')[0]
    )
    if (selectedEntity) {
      let { pageX, pageY } = action.payload
      let { left, top } = getNewEntityPos({
        scale: blockRect.width / 90,
        startPoints,
        currentPoint: {
          x: pageX,
          y: pageY,
        },
      })
      yield put(changeEntity(selectedEntity.id, { left, top }))
    }
  }
}

export default function* mouseMovingWatcher() {
  yield throttle(16, mouseMoving, mouseMovingWorker)
}
