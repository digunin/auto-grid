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
      format: 'ean13',
      selected: false,
      top: '31.4',
      left: '50.5',
      width: '33',
      height: '11.2',
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
      width: 30,
      top: '30',
      left: '40',
      darkColor: '#000',
      lightColor: '#FFF',
      rotate: 0,
      data: mock_data,
    },
    {
      id: 'txt1',
      side: 'front',
      type: 'txt',
      selected: false,
      top: '45',
      left: '10',
      right: '40',
      align: 'right',
      color: 'white',
      fontFamily: 'Arial',
      fontSize: '24',
      rotate: 0,
      data: mock_data,
    },
  ],
  cards_count: 20,
  active_settings_tab: 'front',
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
    },
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
