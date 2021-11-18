import React from 'react'
import QR_Code from './qrcode'

const QRCodeBlock = ({ qrcodes, selected_id, onclick, index }) => {
  return (
    <>
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
            value={qrcode.data[index]}
            qrcode={qrcode}
          />
        )
      })}
    </>
  )
}

export default QRCodeBlock
