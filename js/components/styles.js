import React from 'react'
import useSettings from './useSettings'

const Styles = () => {
  const { front, back } = useSettings()

  let txt_front_style_str = Object.keys(front.txt).map((key) => {
    let style = front.txt[key]
    return `.${key} {
      color: ${style.color};
      font-size: ${style.fontSize}pt;
      text-align: ${style.align};
      top: ${style.top}mm;
      left: ${style.left}mm
  }`
  })

  let txt_back_style_str = Object.keys(back.txt).map((key) => {
    let style = front.txt[key]
    return `.${key} {
      color: ${style.color};
      font-size: ${style.fontSize}pt;
      text-align: ${style.align};
      top: ${style.top}mm;
      left: ${style.left}mm
  }`
  })

  let barcode_front_style_str = Object.keys(front.barcodes).map((key) => {
    let style = front.barcodes[key]
    return `.${key} {
      // font-size: ${style.fontSize}pt;
      width: ${style.width}mm;
      height: ${style.height}mm;
      top: ${style.top}mm;
      left: ${style.left}mm
  }`
  })

  let barcode_back_style_str = Object.keys(back.barcodes).map((key) => {
    let style = back.barcodes[key]
    return `.${key} {
      // font-size: ${style.fontSize}pt;
      width: ${style.width}mm;
      height: ${style.height}mm;
      top: ${style.top}mm;
      left: ${style.left}mm
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
