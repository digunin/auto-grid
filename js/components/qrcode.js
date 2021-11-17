import React from 'react'
import { QRCode } from 'react-qr-svg'

const QR_Code = ({ subclass, value, onclick, qrcode }) => {
  return (
    <QRCode
      onClick={onclick}
      className={`qrcode ${subclass}`}
      bgColor={qrcode.lightColor}
      fgColor={qrcode.darkColor}
      level={qrcode.level}
      value={`${value}`}
    />
  )
}

export default QR_Code
