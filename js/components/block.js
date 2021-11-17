import React from 'react'
import Barcode from './barcode'
import QR_Code from './qrcode'
import useSettings from './useSettings'

const Block = ({ index, side, onclick, selected_id = null }) => {
  const { bgImage, txt, barcodes, qrcodes } = useSettings(side)
  return (
    <div className={`block`}>
      <img src={bgImage} />
      {txt.map((text) => {
        return (
          <div
            onClick={(e) => {
              e.stopPropagation()
              onclick(text.id)
            }}
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
            onclick={(e) => {
              e.stopPropagation()
              onclick(barcode.id)
            }}
            subclass={`${barcode.id}${
              barcode.id === selected_id ? ' selected' : ''
            }`}
            key={barcode.id}
            keyID={barcode.id}
            value={barcode.data[index]}
            barcode={barcode}
          />
        )
      })}
      {qrcodes.map((qrcode) => {
        return (
          <QR_Code
            onclick={(e) => {
              e.stopPropagation()
              onclick(qrcode.id)
            }}
            subclass={`${qrcode.id}${
              qrcode.id === selected_id ? ' selected' : ''
            }`}
            key={qrcode.id}
            keyID={qrcode.id}
            value={qrcode.data[index]}
            qrcode={qrcode}
          />
        )
      })}
    </div>
  )
}

export default Block
