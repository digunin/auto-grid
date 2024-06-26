import React from 'react'
import QR_Code from './qrcode'

const QRCodeBlock = ({
  qrcodes,
  selected_id,
  onEntityMouseDown,
  index,
  inSetting,
}) => {
  return (
    <>
      {qrcodes.map((qrcode) => {
        let printQR =
          (qrcode.data[index] !== undefined && qrcode.data[index] !== '') ||
          inSetting
        return (
          printQR && (
            <QR_Code
              onEntityMouseDown={onEntityMouseDown}
              subclass={`${qrcode.id}${
                qrcode.id === selected_id ? ' selected' : ''
              }`}
              key={qrcode.id}
              value={qrcode.data.length === 0 ? 'QR-Code' : qrcode.data[index]}
              qrcode={qrcode}
            />
          )
        )
      })}
    </>
  )
}

export default QRCodeBlock
