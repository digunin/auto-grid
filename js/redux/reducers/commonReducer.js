import { createAction, createSlice } from '@reduxjs/toolkit'
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

    setSystemFonts: (state, action) => {
      state.systemFonts = action.payload
    },

    setPrintingMode: (state, action) => {
      state.printingMode = action.payload
    },

    changeSideNeedPrint: (state, action) => {
      state.needPrint = { ...state.needPrint, ...action.payload }
    },

    setImageFile: {
      reducer: (state, action) => {
        let { file, data_url } = action.payload
        state.active_settings_side === 'front'
          ? ((state.frontImage = file), (state.imagesDataURL.front = data_url))
          : ((state.backImage = file), (state.imagesDataURL.back = data_url))
      },
      prepare: (file, data_url) => {
        return { payload: { file, data_url } }
      },
    },

    setNewState: (state, action) => {
      return { ...action.payload, systemFonts: state.systemFonts }
    },
  },
})

export const putImage = createAction('common/put_image')
export const loadState = createAction('load_state')

export const {
  setActiveSettingsTab,
  setSystemFonts,
  setPrintingMode,
  changeSideNeedPrint,
  setImageFile,
  setNewState,
} = actions

export default reducer
