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
    case actions.SET_ENTITIES_DATA:
      return {
        ...state,
        entities: state.entities.map((entity) => {
          return entity.data_source_id === action.payload.id
            ? { ...entity, data: action.payload.data }
            : entity
        }),
      }
    case actions.ADD_ENTITY:
      return {
        ...state,
        entities: state.entities.concat({
          ...defaultState[action.payload],
          id: `${action.payload}-${v4()}`,
          side: state.active_settings_side,
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
          if (entity.side == state.active_settings_side) {
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
        active_settings_side:
          action.payload.tabName == 'data-source'
            ? state.active_settings_side
            : action.payload.tabName,
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
        state.active_settings_side == 'front'
          ? { frontImage: action.payload.file }
          : { backImage: action.payload.file }
      return {
        ...state,
        ...tmp,
      }
    case actions.SET_CARDS_COUNT:
      return {
        ...state,
        cards_count: state.entities.reduce((max, entity) => {
          return max > entity.data.length ? max : entity.data.length
        }, 0),
      }
    case actions.SET_DATA_SOURCE:
      let new_source = {}
      new_source[action.payload.name] =
        state.data_source.sources[action.payload.name] ||
        defaultState.dataSource
      new_source[action.payload.name] = {
        ...new_source[action.payload.name],
        ...action.payload.obj,
      }
      return {
        ...state,
        data_source: {
          ...state.data_source,
          sources: {
            ...state.data_source.sources,
            ...new_source,
          },
        },
      }
    case actions.EDIT_DATA_SOURCE:
      return {
        ...state,
        data_source: {
          ...state.data_source,
          editing_source_name: action.payload,
        },
      }
    case actions.DELETE_DATA_SOURCE:
      let newSources = { ...state.data_source.sources }
      delete newSources[action.payload]
      let newEntities = state.entities.map((entity) => {
        return {
          ...entity,
          data_source_id:
            entity.data_source_id === action.payload
              ? ''
              : entity.data_source_id,
          data: entity.data_source_id === action.payload ? [] : entity.data,
        }
      })
      return {
        ...state,
        entities: [...newEntities],
        data_source: {
          editing_source_name: state.data_source.editing_source_name,
          sources: { ...newSources },
        },
      }
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      console.log('default action')
      return state
  }
}

export default reducer
