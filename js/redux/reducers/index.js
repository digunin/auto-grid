import { createSlice, nanoid } from '@reduxjs/toolkit'
import { initialState, defaultObjects } from './initialState'

const { reducer, actions } = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addEntity: (state, action) => {
      let type = action.payload
      let newEntity = {
        ...defaultObjects[type],
        id: `${type}-${nanoid()}`,
      }
      state.entities.push(newEntity)
    },

    deleteEntity: (state, action) => {
      state.entities = state.entities.filter(
        (entity) => entity.id !== action.payload
      )
    },
  },
})

export const { addEntity, deleteEntity } = actions

export default reducer
