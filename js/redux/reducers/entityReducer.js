import { createSlice, nanoid } from '@reduxjs/toolkit'
import { defaultObjects } from './initialState'

const { reducer, actions } = createSlice({
  name: 'entity',
  initialState: [{ id: 'test-0' }],
  reducers: {
    addEntity: (state, action) => {
      state.push({
        id: `${type}-${nanoid()}`,
        ...defaultObjects[action.payload],
      })
    },

    deleteEntity: (state, action) => {
      return state.filter((entity) => entity.id !== action.payload)
    },

    changeEntity: {
      reducer: (state, action) => {
        return state.map((entity) => {
          return entity.id === action.payload.id
            ? { ...entity, ...action.payload.new_props }
            : entity
        })
      },
      prepare: (id, new_props) => {
        return { payload: { id, new_props } }
      },
    },
  },
})

export const { addEntity, deleteEntity, changeEntity } = actions

export default reducer
