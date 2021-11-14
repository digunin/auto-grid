import React from 'react'
import Barcode from './barcode'
import useSettings from './useSettings'

const Block = ({ index, side, onclick, selected_key }) => {
  const { bgImage, txt, barcodes } = useSettings(side)
  return (
    <div className={`block`}>
      <img src={bgImage} />
      {Object.keys(txt).map((key) => {
        return (
          <div
            onClick={() => onclick({ type: 'txt', key: key })}
            key={key}
            className={`numbering ${key} ${
              selected_key === key ? 'selected' : ''
            }`}
          >
            {txt[key].data[index]}
          </div>
        )
      })}
      {Object.keys(barcodes).map((key) => {
        return (
          <Barcode
            onclick={(data) => onclick(data)}
            subclass={`${key}${key === selected_key ? ' selected' : ''}`}
            key={key}
            keyID={key}
            value={barcodes[key].data[index]}
          />
        )
      })}
    </div>
  )
}

export default Block
