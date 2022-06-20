import { select, throttle, put } from 'redux-saga/effects'
import { mouseMoving } from '../reducers/commonReducer'
import { changeEntity } from '../reducers/datasetReducer'
import selector from '../selectors/getSelectedEntitySelector'
import { getPageOffsetRect, getNewEntityPos } from '../../utils'

function* mouseMovingWorker(action) {
  let isDragEnabled = yield select((state) => state.common.dragEnabled)
  if (isDragEnabled) {
    let selectedEntity = yield select(selector)
    let blockRect = getPageOffsetRect(
      document.getElementsByClassName('block')[0]
    )
    if (selectedEntity) {
      let { pageX, pageY } = action.payload
      let pixelRect = { ...blockRect, pointer: { x: pageX, y: pageY } }
      let mmRect = {
        x: 0,
        y: 0,
        width: 90,
        height: 57,
        pointer: {
          x: Number(selectedEntity.left),
          y: Number(selectedEntity.top),
        },
      }
      let { left, top } = getNewEntityPos(pixelRect, mmRect)
      yield put(changeEntity(selectedEntity.id, { left, top }))
    }
  }
}

export default function* mouseMovingWatcher() {
  yield throttle(200, mouseMoving, mouseMovingWorker)
}
