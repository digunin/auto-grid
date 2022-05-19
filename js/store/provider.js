import React, { useReducer } from 'react'
import frontjpg from '../../images/front.jpg'
import backjpg from '../../images/back.jpg'
import Context from './settingContext'
import reducer from './reducer'
import { actions } from './actions'
import { mock_data, dataSelectorModeInfo } from '../utils'

const initialState = {
  frontImage: { content: frontjpg },
  backImage: { content: backjpg },
  entities: [
    {
      id: 'ean13',
      side: 'back',
      type: 'barcode',
      format: 'code128',
      selected: false,
      top: '36.6',
      left: '40.5',
      width: '43.6',
      height: '14.2',
      fontSize: '35',
      textPosition: 'bottom',
      displayValue: true,
      flat: false,
      barWidth: 2.5,
      rotate: 0,
      data_source_id: '',
      data: [],
    },
    // {
    //   id: 'qr',
    //   side: 'front',
    //   type: 'qrcode',
    //   selected: false,
    //   level: 'M',
    //   margin: 7,
    //   scale: 1,
    //   pixelWwidth: 4,
    //   width: 12,
    //   top: '36',
    //   left: '67.5',
    //   darkColor: '#000',
    //   lightColor: '#FFF',
    //   rotate: 270,
    //   data: mock_data,
    // },
    // {
    //   id: 'txt1',
    //   side: 'front',
    //   type: 'txt',
    //   selected: false,
    //   top: '45',
    //   left: '10',
    //   width: '45',
    //   height: '7',
    //   align: 'center',
    //   color: 'white',
    //   fontFamily: 'Arial',
    //   fontSize: '12',
    //   rotate: 0,
    //   data: mock_data,
    // },
  ],
  cards_count: 0,
  active_settings_tab: 'front',
  active_settings_side: 'front',
  systemFonts: [],
  printingMode: 'grid',
  needPrint: {
    front: true,
    back: true,
  },
  data_source: {
    editing_source_name: '',
    sources: {
      source_1: {
        data: mock_data,
        data_selector_mode: dataSelectorModeInfo[0][0],
      },
    },
  },
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    ...state,
    actions: {
      changeEntity: (id, new_props) => {
        dispatch({
          type: actions.CHANGE_ENTITY,
          payload: {
            id,
            new_props,
          },
        })
      },
      setEntitiesData: (id, data) => {
        dispatch({
          type: actions.SET_ENTITIES_DATA,
          payload: { id, data },
        })
      },
      addEntity: (type) => {
        dispatch({
          type: actions.ADD_ENTITY,
          payload: type,
        })
      },
      deleteEntity: (id) => {
        dispatch({
          type: actions.DELETE_ENTITY,
          payload: id,
        })
      },
      setSelected: (id) => {
        dispatch({
          type: actions.SET_SELECTED,
          payload: { id },
        })
      },
      setActiveSettingsTab: (tabName) => {
        dispatch({
          type: actions.SET_ACTIVE_SETTINGS_TAB,
          payload: { tabName },
        })
      },
      setSystemFonts: (fontsArray) => {
        dispatch({ type: actions.SET_SYSTEM_FONTS, payload: fontsArray })
      },
      setPrintingMode: (mode) => {
        dispatch({ type: actions.SET_PRINTING_MODE, payload: mode })
      },
      changeSideNeedPrint: (payload) => {
        dispatch({ type: actions.CHANGE_SIDE_NEED_PRINT, payload })
      },
      setImageFile: (file) => {
        dispatch({
          type: actions.SET_IMAGE_FILE,
          payload: {
            file,
          },
        })
      },
      setDataSource: (name, obj) => {
        dispatch({
          type: actions.SET_DATA_SOURCE,
          payload: { name, obj },
        })
      },
      editDataSource: (name) => {
        dispatch({
          type: actions.EDIT_DATA_SOURCE,
          payload: name,
        })
      },
      deleteDataSource: (name) => {
        dispatch({
          type: actions.DELETE_DATA_SOURCE,
          payload: name,
        })
      },
      setCardsCount: () => {
        dispatch({
          type: actions.SET_CARDS_COUNT,
        })
      },
      setNewState: (state) => {
        dispatch({
          type: actions.SET_STATE,
          payload: state,
        })
      },
    },
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
