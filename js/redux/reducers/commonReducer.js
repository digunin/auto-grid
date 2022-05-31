import { createSlice } from '@reduxjs/toolkit'
import { defaultObjects } from './initialState'

const { reducer, actions } = createSlice({
  name: 'common',
  initialState: { ...defaultObjects.common },
  reducers: {
    setActiveSettingsTab: (state, action) => {
      state.active_settings_tab = action.payload
      state.active_settings_side =
        action.payload == 'data-source'
          ? state.active_settings_side
          : action.payload
    },

    setSystemFonts: (state, action) => (state.systemFonts = action.payload),

    setPrintingMode: (state, action) => (state.printingMode = action.payload),

    changeSideNeedPrint: (state, action) => {
      state.needPrint = { ...state.needPrint, ...action.payload }
    },
    // todos:
    setImageFile: (state, action) => state,
    setNewState: (state, action) => state,
  },
})

export const {
  setActiveSettingsTab,
  setSystemFonts,
  setPrintingMode,
  changeSideNeedPrint,
  setImageFile,
  setNewState,
} = actions

export default reducer
