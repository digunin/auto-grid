import React from 'react'
import { QRCode } from 'react-qr-svg'

const QR_Code = ({ subclass, value, onEntityMouseDown, qrcode }) => {
  return (
    <QRCode
      onMouseDown={(e) => {
        onEntityMouseDown(qrcode.id, e)
      }}
      className={`qrcode ${subclass}`}
      bgColor={qrcode.lightColor}
      fgColor={qrcode.darkColor}
      level={qrcode.level}
      value={`${value}`}
    />
  )
}

export default QR_Code
