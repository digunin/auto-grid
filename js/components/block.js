import React from 'react'
import TxtBlock from './txtBlock'
import BarcodeBlock from './barcodeBlock'
import QRCodeBlock from './QRCodeBlock'
import useSettings from './useSettings'

const Block = ({ index, side, subclass, onclick, selected_id = null }) => {
  const { bgImage, txt, barcodes, qrcodes } = useSettings(side)
  return (
    <div className={`block ${subclass ? subclass : ''}`}>
      <img src={bgImage} />
      <TxtBlock
        txt={txt}
        index={index}
        onclick={onclick}
        selected_id={selected_id}
      />
      <QRCodeBlock
        qrcodes={qrcodes}
        index={index}
        onclick={onclick}
        selected_id={selected_id}
      />
      <BarcodeBlock
        index={index}
        onclick={onclick}
        selected_id={selected_id}
        barcodes={barcodes}
      />
    </div>
  )
}

export default Block
