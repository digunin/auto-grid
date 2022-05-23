import { createReducer } from '@reduxjs/toolkit'
import { someAction_1, someAction_2 } from '../actions'

const initialState = {
  one: 1,
  two: 2,
}

const reducer = createReducer(initialState, {
  [someAction_1]: (state, action) => {
    state.one = action.payload
  },
  [someAction_2]: (state, action) => {
    state.two = action.payload
  },
})

export default reducer
