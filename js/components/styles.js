import React from 'react'
import useSettings from './useSettings'

const Styles = () => {
  const { entities } = useSettings()

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
        transform-origin: center;
        transform: rotate(${entity.rotate}deg) !important;
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
  return <style>{style_str}</style>
}

export default Styles
