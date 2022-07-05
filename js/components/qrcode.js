import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

const QR_Code = ({ subclass, value, onEntityMouseDown, qrcode }) => {
  return (
    <QRCodeSVG
      onMouseDown={(e) => {
        onEntityMouseDown(qrcode, e)
      }}
      className={`entity qrcode ${subclass}`}
      bgColor={qrcode.lightColor}
      fgColor={qrcode.darkColor}
      level={qrcode.level}
      value={`${value}`}
    />
  )
}

export default QR_Code
