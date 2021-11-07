import React, { useContext } from 'react'
import Context from '../store/settingContext'

const Setting = () => {
  const { changeText, txt, barcodes, front_img, back_img } = useContext(Context)
  return (
    <div>
      <button
        onClick={() => {
          changeText({ classname: 'txt1', new_props: { color: 'white' } })
        }}
      >
        Поменять цвет
      </button>
    </div>
  )
}

export default Setting
