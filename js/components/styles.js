import React from 'react'
import { useSelector } from 'react-redux'
import printingSelector from '../redux/selectors/printingSelector'
import getImageStyleSelector from '../redux/selectors/getImageStyleSelector'

const Styles = () => {
  const entities = useSelector((state) => state.dataSet.entities)
  const scale = useSelector(
    (state) => state.common.blockInsideBlockWrapperScale
  )
  const { frontStyle, backStyle } = useSelector(getImageStyleSelector)
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
      let txtShadow =
        entity.textBorderWidth == 0
          ? ''
          : `text-shadow: ${entity.textBorderWidth}px 0 0 ${entity.textBorderColor},
      ${entity.textBorderWidth}px ${entity.textBorderWidth}px 0 ${entity.textBorderColor},
      0 ${entity.textBorderWidth}px 0 ${entity.textBorderColor}, 
      -${entity.textBorderWidth}px ${entity.textBorderWidth}px 0 ${entity.textBorderColor}, 
      -${entity.textBorderWidth}px 0 0 ${entity.textBorderColor}, 
      -${entity.textBorderWidth}px -${entity.textBorderWidth}px 0 ${entity.textBorderColor}, 
      0 -${entity.textBorderWidth}px 0 ${entity.textBorderColor},
      ${entity.textBorderWidth}px -${entity.textBorderWidth}px 0 ${entity.textBorderColor};`
      return `.${entity.id} {
        color: ${entity.color};
        font-size: ${entity.fontSize}pt;
        font-family: ${entity.fontFamily};
        font-weight: ${entity.fontWeight};
        font-style: ${entity.fontStyle};
        text-decoration: ${entity.textDecoration};
        top: ${entity.top}mm;
        left: ${entity.left}mm;
        width: ${entity.width}mm;
        height: ${entity.height}mm;
        text-align: ${entity.align};
        transform-origin: center;
        transform: rotate(${entity.rotate}deg) !important;
        ${txtShadow}
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

  let blockInsideBlockWrapperStyle = `
  .block-wrapper {
    margin: 0 auto;
    display: grid;
    grid-template-columns: var(--position-button-min-size) calc(var(--block-width)*${scale}) var(--position-button-min-size);
    grid-template-rows: var(--position-button-min-size) calc(var(--block-height)*${scale}) var(--position-button-min-size);
    transition: width 0.2s, height 0.2s, grid-template 0.2s
  }

  .block-wrapper .block {
    margin: 0 auto;
    overflow: hidden;
    transform-origin: top;
    transform: scale(${scale});
    transition: transform 0.2s;
  }

  .card-image{
    width: var(--block-width);
    height: var(--block-height);
  }

  .front-image {
    object-position: ${frontStyle.position};
    object-fit: ${frontStyle.fit};
  }

  .back-image {
    object-position: ${backStyle.position};
    object-fit: ${backStyle.fit};
  }
  `

  return (
    <style>
      {style_str}
      {mediaStyle}
      {blockInsideBlockWrapperStyle}
    </style>
  )
}

export default Styles
