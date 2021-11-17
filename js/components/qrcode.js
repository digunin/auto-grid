import React from 'react'
import { useQRCode } from 'next-qrcode'

const QRCode = ({ subclass, value, onclick, qrcode }) => {
  const { inputRef } =
    useQRCode <
    HTMLImageElement >
    {
      type: 'image/jpeg',
      text: value,
      options: {
        level: qrcode.level,
        margin: qrcode.margin,
        scale: qrcode.scale,
        quality: 1,
        width: qrcode.pixelWidth,
        color: {
          dark: qrcode.darkColor,
          light: qrcode.lightColor,
        },
      },
    }

  return (
    <img onClick={onclick} className={`qrcode ${subclass}`} ref={inputRef} />
  )
}

export default QRCode
