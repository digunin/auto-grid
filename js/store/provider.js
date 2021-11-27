import React, { useReducer } from 'react'
import frontjpg from '../../images/front.jpg'
import backjpg from '../../images/back.jpg'
import Context from './settingContext'
import reducer from './reducer'
import { actions } from './actions'
import { mock_data } from '../utils'

const initialState = {
  frontImage: frontjpg,
  backImage: backjpg,
  entities: [
    {
      id: 'ean13',
      side: 'back',
      type: 'barcode',
      format: 'code128',
      selected: false,
      top: '21.4',
      left: '21.8',
      width: '43.6',
      height: '14.2',
      fontSize: '24',
      textPosition: 'bottom',
      displayValue: true,
      flat: false,
      barWidth: 2.5,
      rotate: 0,
      data: mock_data,
    },
    {
      id: 'qr',
      side: 'front',
      type: 'qrcode',
      selected: false,
      level: 'M',
      margin: 7,
      scale: 1,
      pixelWwidth: 4,
      width: 13,
      top: '6.5',
      left: '8.5',
      darkColor: '#000',
      lightColor: '#FFF',
      rotate: 90,
      data: mock_data,
    },
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
  cards_count: 10,
  active_settings_tab: 'front',
  systemFonts: [],
  printingMode: 'grid',
  needPrint: {
    front: true,
    back: true,
  },
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    ...state,
    actions: {
      changeEntity: ({ id, new_props }) => {
        dispatch({
          type: actions.CHANGE_ENTITY,
          payload: {
            id,
            new_props,
          },
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
    },
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
