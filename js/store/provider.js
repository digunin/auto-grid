import React, { useReducer } from 'react'
import frontjpg from '../../images/front.jpg'
import backjpg from '../../images/back.jpg'
import Context from './settingContext'
import reducer from './reducer'
import { actions } from './actions'
import { mock_data_100 } from '../utils'

const initialState = {
  front: {
    bgImage: frontjpg,
    barcodes: {},
    txt: {
      txt1: {
        top: '45mm',
        left: '10mm',
        right: '40mm',
        align: 'right',
        color: 'black',
        fontFamily: 'Arial',
        fontSize: '24pt',
        data: mock_data_100,
      },
    },
  },
  back: {
    bgImage: backjpg,
    barcodes: {
      ean13: {
        top: '39.2mm',
        left: '52.2mm',
        width: '33mm',
        height: '12.9mm',
        fontSize: '20pt',
        data: mock_data_100,
      },
    },
    txt: {},
  },
  cards_count: 100,
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    ...state,
    changeText: ({ classname, new_props }) => {
      dispatch({
        type: actions.CHANGE_TEXT,
        payload: {
          classname,
          new_props,
        },
      })
    },
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
