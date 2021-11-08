import { actions } from './actions'

const frontOrBack = (state, key) => {
  if (key in state.front.txt) return 'front'
  return 'back'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TEXT:
      let { classname, new_props } = action.payload
      let side = frontOrBack(state, classname)
      let tmp = { ...state }
      let old_props = tmp[side].txt[classname]
      tmp[side].txt[classname] = { ...old_props, ...new_props }
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
