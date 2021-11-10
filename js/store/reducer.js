import { actions } from './actions'

const frontOrBack = (state, key, type) => {
  if (key in state.front[type]) return 'front'
  return 'back'
}

const reducer = (state, action) => {
  let side = ''
  let tmp = {}
  let old_props = {}
  switch (action.type) {
    case actions.CHANGE_TEXT:
      side = frontOrBack(state, action.payload.classname)
      tmp = { ...state }
      old_props = tmp[side].txt[action.payload.classname]
      tmp[side].txt[action.payload.classname] = {
        ...old_props,
        ...action.payload.new_props,
      }
      return {
        ...tmp,
      }
      break
    case actions.CHANGE_BARCODE:
      side = frontOrBack(state, action.payload.classname)
      tmp = { ...state }
      old_props = tmp[side].barcodes[action.payload.classname]
      tmp[side].barcodes[action.payload.classname] = {
        ...old_props,
        ...action.payload.new_props,
      }
      return {
        ...tmp,
      }
    case actions.SET_ACTIVE_SETTINGS_TAB:
      return {
        ...state,
        active_settings_tab: action.payload,
      }
    default:
      return state
  }
}

export default reducer
