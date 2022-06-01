import { createSlice } from '@reduxjs/toolkit'
import { defaultObjects } from './initialState'
import { dataURLtoBlob } from '../../utils'

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

    setImageFile: (state, action) => {
      let file = action.payload
      if (file) {
        localStorage.setItem(state.active_settings_side, file?.content || '')
        file.content = URL.createObjectURL(dataURLtoBlob(file.content))
      }
      state.active_settings_side === 'front'
        ? (state.frontImage = file)
        : (state.backImage = file)
    },

    setNewState: (state, action) => {
      let loadingState = action.payload
      if (loadingState.frontImage) {
        if (
          loadingState.frontImage.content.startsWith('data:image') &&
          loadingState.frontImage.content.length < maxDataURL_length
        ) {
          localStorage.setItem('front', loadingState.frontImage.content)
          loadingState.frontImage.content = URL.createObjectURL(
            dataURLtoBlob(loadingState.frontImage.content)
          )
        }
      }

      if (loadingState.backImage) {
        if (
          loadingState.backImage.content.startsWith('data:image') &&
          loadingState.backImage.content.length < maxDataURL_length
        ) {
          localStorage.setItem('back', loadingState.backImage.content)
          loadingState.backImage.content = URL.createObjectURL(
            dataURLtoBlob(loadingState.backImage.content)
          )
        }
      }

      return { ...state, ...loadingState }
    },
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
