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
  }
}

export default reducer
