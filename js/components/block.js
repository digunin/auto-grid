import React from 'react'
import Barcode from './barcode'
import useSettings from './useSettings'

const Block = ({ index, side, onclick, selected_id = null }) => {
  const { bgImage, txt, barcodes } = useSettings(side)
  return (
    <div className={`block`}>
      <img src={bgImage} />
      {txt.map((text) => {
        return (
          <div
            onClick={() => onclick(text.id)}
            key={text.id}
            className={`numbering ${text.id} ${
              selected_id === text.id ? 'selected' : ''
            }`}
          >
            {text.data[index]}
          </div>
        )
      })}
      {barcodes.map((barcode) => {
        return (
          <Barcode
            onclick={() => onclick(barcode.id)}
            subclass={`${barcode.id}${
              barcode.id === selected_id ? ' selected' : ''
            }`}
            key={barcode.id}
            keyID={barcode.id}
            value={barcode.data[index]}
            format={barcode.format}
          />
        )
      })}
    </div>
  )
}

export default Block
