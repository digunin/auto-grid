import React, { useContext } from 'react'
import Context from '../store/settingContext'
import Barcode from './barcode'

const Block = ({ index, side }) => {
  const { bgImage, txt, barcodes } = useContext(Context)[side]
  return (
    <div className={`block`}>
      <img src={bgImage} />
      {Object.keys(txt).map((key) => {
        return (
          <div key={index} className={`numbering ${key}`}>
            {txt[key].data[index]}
          </div>
        )
      })}
      {Object.keys(barcodes).map((key) => {
        return (
          <Barcode
            subclass={key}
            key={index}
            value={barcodes[key].data[index]}
          />
        )
      })}
    </div>
  )
}

export default Block
