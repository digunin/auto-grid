import React, { useContext } from 'react'
import Context from '../store/settingContext'

const Styles = () => {
  const { front, back } = useContext(Context)

  let txt_front_style_str = Object.keys(front.txt).map((key) => {
    let style = front.txt[key]
    return `.${key} {
      color: ${style.color};
      font-size: ${style.fontSize};
      text-align: ${style.align};
      top: ${style.top};
      left: ${style.left}
  }`
  })

  let txt_back_style_str = Object.keys(back.txt).map((key) => {
    let style = front.txt[key]
    return `.${key} {
      color: ${style.color};
      font-size: ${style.fontSize};
      text-align: ${style.align};
      top: ${style.top};
      left: ${style.left}
  }`
  })

  let barcode_front_style_str = Object.keys(front.barcodes).map((key) => {
    let style = front.barcodes[key]
    return `.${key} {
      // font-size: ${style.fontSize};
      width: ${style.width};
      height: ${style.height};
      top: ${style.top};
      left: ${style.left}
  }`
  })

  let barcode_back_style_str = Object.keys(back.barcodes).map((key) => {
    let style = back.barcodes[key]
    return `.${key} {
      // font-size: ${style.fontSize};
      width: ${style.width};
      height: ${style.height};
      top: ${style.top};
      left: ${style.left}
  }`
  })
  return (
    <style>
      {txt_front_style_str}
      {txt_back_style_str}
      {barcode_front_style_str}
      {barcode_back_style_str}
    </style>
  )
}

export default Styles
