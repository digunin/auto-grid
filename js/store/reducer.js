import { actions } from './actions'

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
      break
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
    default:
      console.log('default action')
      return state
  }
}

export default reducer
