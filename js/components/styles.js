import React from 'react'
import useSettings from './useSettings'

const Styles = () => {
  const { entities } = useSettings()

  let style_str = entities.map((entity) => {
    if (entity.type == 'txt') {
      return `.${entity.id} {
        color: ${entity.color};
        font-size: ${entity.fontSize}pt;
        text-align: ${entity.align};
        top: ${entity.top}mm;
        left: ${entity.left}mm
      }`
    }
    if (entity.type == 'barcode') {
      return `.${entity.id} {
        width: ${entity.width}mm;
        height: ${entity.height}mm;
        top: ${entity.top}mm;
        left: ${entity.left}mm
      }`
    }
  })
  return <style>{style_str}</style>
}

export default Styles
