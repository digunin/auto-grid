import React, { useReducer } from 'react'
import frontjpg from '../../images/front.jpg'
import backjpg from '../../images/back.jpg'
import Context from './settingContext'
import reducer from './reducer'
import { actions } from './actions'
import { mock_data_500 } from '../utils'

const initialState = {
  front: {
    bgImage: frontjpg,
    selected: null,
    barcodes: {},
    txt: {
      txt1: {
        top: '45',
        left: '10',
        right: '40',
        align: 'right',
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '24',
        data: mock_data_500,
      },
    },
  },
  back: {
    bgImage: backjpg,
    selected: null,
    barcodes: {
      ean13: {
        top: '39.2',
        left: '51.2',
        width: '33',
        height: '12.8',
        fontSize: '20',
        data: mock_data_500,
      },
      ean13_2: {
        top: '0',
        left: '0',
        width: '33',
        height: '12.8',
        fontSize: '20',
        data: mock_data_500,
      },
    },
    txt: {},
  },
  cards_count: 500,
  active_settings_tab: 'front',
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    ...state,
    actions: {
      changeText: ({ classname, new_props }) => {
        dispatch({
          type: actions.CHANGE_TEXT,
          payload: {
            classname,
            new_props,
          },
        })
      },
      changeBarcode: ({ classname, new_props }) => {
        dispatch({
          type: actions.CHANGE_BARCODE,
          payload: {
            classname,
            new_props,
          },
        })
      },
      setSelected: ({ side, selected }) => {
        dispatch({
          type: actions.SET_SELECTED,
          payload: {
            side,
            selected,
          },
        })
      },
      setActiveSettingsTab: (tabName) => {
        dispatch({
          type: actions.SET_ACTIVE_SETTINGS_TAB,
          payload: tabName,
        })
      },
    },
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
