import React, { useContext } from 'react'
import Context from '../store/settingContext'

const Setting = () => {
  const { changeTextColor } = useContext(Context)
  return (
    <div>
      <button
        onClick={() => {
          changeTextColor({ classname: 'txt1', color: 'white' })
        }}
      >
        Поменять цвет
      </button>
    </div>
  )
}

export default Setting
