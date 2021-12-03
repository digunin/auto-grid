import { actions } from './actions'
import { v4 } from 'uuid'
import { defaultState } from './defaultState'

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_ENTITY:
      let new_props = action.payload.new_props
      return {
        ...state,
        entities: state.entities.map((entity) => {
          if (entity.id == action.payload.id) return { ...entity, ...new_props }
          return entity
        }),
      }
    case actions.ADD_ENTITY:
      return {
        ...state,
        entities: state.entities.concat({
          ...defaultState[action.payload],
          id: `${action.payload}-${v4()}`,
          side: state.active_settings_tab,
        }),
      }
    case actions.DELETE_ENTITY:
      return {
        ...state,
        entities: state.entities.filter(
          (entity) => entity.id !== action.payload
        ),
      }
    case actions.SET_SELECTED:
      return {
        ...state,
        entities: state.entities.map((entity) => {
          if (entity.side == state.active_settings_tab) {
            let selected = action.payload.id == entity.id ? true : false
            return { ...entity, selected }
          }
          return { ...entity }
        }),
      }
    case actions.SET_ACTIVE_SETTINGS_TAB:
      return {
        ...state,
        active_settings_tab: action.payload.tabName,
      }
    case actions.SET_SYSTEM_FONTS:
      return {
        ...state,
        systemFonts: [...action.payload],
      }
    case actions.SET_PRINTING_MODE:
      return {
        ...state,
        printingMode: action.payload,
      }
    case actions.CHANGE_SIDE_NEED_PRINT:
      return {
        ...state,
        needPrint: {
          ...state.needPrint,
          ...action.payload,
        },
      }
    case actions.SET_IMAGE_FILE:
      let tmp =
        state.active_settings_tab == 'front'
          ? { frontImage: action.payload.file }
          : { backImage: action.payload.file }
      return {
        ...state,
        ...tmp,
      }
    case actions.SET_DATA:
      return {
        ...state,
        cards_count: action.payload.length,
        entities: state.entities.map((entity) => {
          if (entity.side == state.active_settings_tab && entity.selected) {
            return {
              ...entity,
              data: [...action.payload],
            }
          }
          return entity
        }),
      }
    case actions.SET_STATE:
      return { ...action.payload }
    default:
      console.log('default action')
      return state
  }
}

export default reducer
