import { createSlice, nanoid } from '@reduxjs/toolkit'
import { defaultObjects } from './initialState'

const { reducer, actions } = createSlice({
  name: 'entity',
  initialState: {
    entities: [],
    dataSource: { ...defaultObjects.dataSource },
    cardsCount: 0,
  },
  reducers: {
    addEntity: {
      reducer: (state, action) => {
        const { type, side } = action.payload
        state.entities.push({
          ...defaultObjects[type],
          id: `${type}-${nanoid()}`,
          side,
        })
      },
      prepare: (type, side) => {
        return { payload: { type, side } }
      },
    },

    deleteEntity: (state, action) => {
      state.entities = state.entities.filter(
        (entity) => entity.id !== action.payload
      )
    },

    changeEntity: {
      reducer: (state, action) => {
        const { id, new_props } = action.payload
        state.entities = state.entities.map((entity) => {
          return entity.id === id ? { ...entity, ...new_props } : entity
        })
      },
      prepare: (id, new_props) => {
        return { payload: { id, new_props } }
      },
    },

    setSelected: {
      reducer: (state, action) => {
        const { id, side } = action.payload
        state.entities.forEach((entity) => {
          if (entity.side === side) {
            entity.selected = entity.id === id
          }
        })
      },
      prepare: (id, side) => {
        return { payload: { id, side } }
      },
    },

    setEntitiesData: {
      reducer: (state, action) => {
        let { id, data } = action.payload
        state.entities.forEach((entity) => {
          if (entity.data_source_id === id) {
            entity.data = data
          }
        })
      },
      prepare: (id, data) => {
        return { payload: { id, data } }
      },
    },

    setCardsCount: (state, action) => {
      state.cardsCount = state.entities.reduce((max, entity) => {
        return max > entity.data.length ? max : entity.data.length
      }, 0)
    },

    setDataSource: {
      reducer: (state, action) => {
        const { name, data } = action.payload
        let tmp = state.dataSource.sources[name] || {}
        state.dataSource.sources[name] = { ...tmp, data }
      },
      prepare: (name, data) => {
        return { payload: { name, data } }
      },
    },

    setDataSourceProps: (state, action) => {
      const props = action.payload
      Object.keys(props).forEach((key) => {
        state.dataSource[key] = props[key]
      })
    },

    editDataSource: (state, action) => {
      state.dataSource.editing_source_name = action.payload
    },

    deleteDataSource: (state, action) => {
      delete state.dataSource.sources[action.payload]
      state.entities.forEach((entity) => {
        if (entity.data_source_id === action.payload) {
          entity.data_source_id = ''
          entity.data = []
        }
      })
    },

    setNewState: (state, action) => {
      return { ...action.payload }
    },
  },
})

export const {
  addEntity,
  deleteEntity,
  changeEntity,
  setSelected,
  setEntitiesData,
  setCardsCount,
  setDataSource,
  setDataSourceProps,
  editDataSource,
  deleteDataSource,
  setNewState,
} = actions

export default reducer
