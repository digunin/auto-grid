import { actions } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TEXT_COLOR:
      let tmp = {
        data_set: {
          txt: {},
        },
      }
      let old = state.data_set.txt[action.payload.classname]
      tmp.data_set.txt[action.payload.classname] = {
        ...old,
        color: action.payload.color,
      }
      return {
        ...state,
        ...tmp,
      }
  }
}

export default reducer
