import React from 'react'
import { useSelector } from 'react-redux'
import TxtBlock from './txtBlock'
import BarcodeBlock from './barcodeBlock'
import QRCodeBlock from './QRCodeBlock'
import ImageComponent from './imageComponent'
import separatedEntitiesSelector from '../redux/selectors/separatedEntitiesSelector'

const Block = ({
  index,
  side,
  subclass,
  onEntityMouseDown,
  on_mouse_move,
  reset_drag,
  selected_id = null,
  inSetting = false,
}) => {
  const { bgImage, txt, barcodes, qrcodes } = useSelector(
    separatedEntitiesSelector(side)
  )

  const mouseMoveHandler =
    on_mouse_move ||
    function () {
      return
    }

  return (
    <div
      className={`block ${subclass ? subclass : ''}`}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={reset_drag}
    >
      {bgImage && <ImageComponent file={bgImage} side={side} />}
      <TxtBlock
        txt={txt}
        index={index}
        onEntityMouseDown={onEntityMouseDown}
        selected_id={selected_id}
        inSetting={inSetting}
      />
      <QRCodeBlock
        qrcodes={qrcodes}
        index={index}
        onEntityMouseDown={onEntityMouseDown}
        selected_id={selected_id}
        inSetting={inSetting}
      />
      <BarcodeBlock
        index={index}
        onEntityMouseDown={onEntityMouseDown}
        selected_id={selected_id}
        barcodes={barcodes}
        inSetting={inSetting}
      />
    </div>
  )
}

export default Block
