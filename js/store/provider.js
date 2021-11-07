import React, { useReducer } from 'react'
import frontjpg from '../../images/front.jpg'
import backjpg from '../../images/back.jpg'
import Context from './settingContext'
import reducer from './reducer'
import { actions } from './actions'

const initialState = {
  front: {
    bgImage: frontjpg,
    barcodes: {},
    txt: {
      txt1: {
        top: 45,
        left: 10,
        right: 40,
        align: 'right',
        color: 'black',
        fontFamily: 'Arial',
        fontSize: '24pt',
        data: [1111, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
  },
  back: {
    bgImage: backjpg,
    barcodes: {
      ean13: {
        top: 30,
        left: 40,
        width: 30,
        height: 20,
        fontSize: '12pt',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
    txt: {},
  },
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
