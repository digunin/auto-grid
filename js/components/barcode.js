import React from 'react'
import { useBarcode } from 'next-barcode'

const Barcode = ({ subclass, value, onEntityMouseDown, barcode }) => {
  const { inputRef } = useBarcode({
    value: value,
    options: {
      format: barcode.format,
      background: '#ffffff',
      marginTop: 4,
      marginBottom: 4,
      fontOptions: 'bold',
      fontSize: barcode.fontSize,
      textPosition: barcode.textPosition,
      textMargin: 0,
      displayValue: barcode.displayValue,
      flat: barcode.flat,
      width: Number(barcode.barWidth),
    },
  })

  return (
    <svg
      onMouseDown={(e) => onEntityMouseDown(barcode, e)}
      className={`entity barcode ${subclass}`}
      ref={inputRef}
    />
  )
}

export default Barcode

// setting for barcode https://www.npmjs.com/package/react-barcodes
