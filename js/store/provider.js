import React, { useReducer } from 'react'
import frontjpg from '../../images/front.jpg'
import backjpg from '../../images/back.jpg'
import Context from './settingContext'
import reducer from './reducer'
import { actions } from './actions'

const initialState = {
  front_img: frontjpg,
  back_img: backjpg,
  data_set: {
    barcodes: {
      ean13: {
        top: 30,
        left: 40,
        width: 30,
        height: 20,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
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
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    ...state,
    changeTextColor: ({ classname, color }) => {
      dispatch({
        type: actions.CHANGE_TEXT_COLOR,
        payload: {
          classname,
          color,
        },
      })
    },
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
