import React from 'react'
import { useSelector } from 'react-redux'
import printingSelector from '../redux/selectors/printingSelector'

const Styles = () => {
  const entities = useSelector((state) => state.dataSet.entities)
  const { printingMode } = useSelector(printingSelector)
  const mediaStyle = `
  @media print {
    nav {
      display: none;
    }
    :root {
      padding-top: 0;
    }
    .block.grid-block,
    .block.sublime-block {
      border: none;
    }
    @page {
      margin: 0;
      ${printingMode == 'grid' ? 'margin-top: 3.75mm' : ''}
    }
  }
  `

  let style_str = entities.map((entity) => {
    if (entity.type == 'txt') {
      return `.${entity.id} {
        color: ${entity.color};
        font-size: ${entity.fontSize}pt;
        font-family: ${entity.fontFamily};
        top: ${entity.top}mm;
        left: ${entity.left}mm;
        width: ${entity.width}mm;
        height: ${entity.height}mm;
        text-align: ${entity.align};
        transform-origin: center;
        transform: rotate(${entity.rotate}deg) !important;
        text-shadow: ${entity.textBorderWidth}px 0 0 ${entity.textBorderColor},
        ${entity.textBorderWidth}px ${entity.textBorderWidth}px 0 ${entity.textBorderColor},
        0 ${entity.textBorderWidth}px 0 ${entity.textBorderColor}, 
        -${entity.textBorderWidth}px ${entity.textBorderWidth}px 0 ${entity.textBorderColor}, 
        -${entity.textBorderWidth}px 0 0 ${entity.textBorderColor}, 
        -${entity.textBorderWidth}px -${entity.textBorderWidth}px 0 ${entity.textBorderColor}, 
        0 -${entity.textBorderWidth}px 0 ${entity.textBorderColor},
        ${entity.textBorderWidth}px -${entity.textBorderWidth}px 0 ${entity.textBorderColor};
      }`
    }
    if (entity.type == 'barcode') {
      return `.${entity.id} {
        width: ${entity.width}mm;
        height: ${entity.height}mm;
        top: ${entity.top}mm;
        left: ${entity.left}mm;
        transform-origin: center;
        transform: rotate(${entity.rotate}deg) !important;
      }`
    }
    if (entity.type == 'qrcode') {
      return `.${entity.id} {
        width: ${entity.width}mm;
        height: ${entity.width}mm;
        top: ${entity.top}mm;
        left: ${entity.left}mm;
        transform-origin: center;
        transform: rotate(${entity.rotate}deg) !important;
      }`
    }
  })
  return (
    <style>
      {style_str}
      {mediaStyle}
    </style>
  )
}

export default Styles
