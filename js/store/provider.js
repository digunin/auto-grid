import React, { useReducer } from 'react'
import frontjpg from '../../images/front.jpg'
import backjpg from '../../images/back.jpg'
import Context from './settingContext'
import reducer from './reducer'
import { actions } from './actions'
import { mock_data_500 } from '../utils'

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
      fontSize: '20',
      displayValue: false,
      flat: true,
      barWidth: 2.5,
      data: mock_data_500,
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
