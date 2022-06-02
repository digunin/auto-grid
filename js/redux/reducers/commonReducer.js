import { createAction, createSlice } from '@reduxjs/toolkit'
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

export const putImage = createAction('common/put_image')

export const {
  setActiveSettingsTab,
  setSystemFonts,
  setPrintingMode,
  changeSideNeedPrint,
  setImageFile,
  setNewState,
} = actions

export default reducer
