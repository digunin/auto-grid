import React from 'react'
import { useBarcode } from 'react-barcodes'
import { checkValue } from '../utils'

const Barcode = ({ subclass, value, onclick, barcode }) => {
  if (!checkValue(barcode.format, value)) {
    return (
      <div onClick={onclick} className={`barcode ${subclass}`}>
        Некорректное значение
      </div>
    )
  }
  const { inputRef } = useBarcode({
    value: value,
    options: {
      format: barcode.format,
      background: '#ffffff',
      marginTop: 4,
      marginBottom: 4,
      fontOptions: 'bold',
      textMargin: 0,
      displayValue: barcode.displayValue,
      flat: barcode.flat,
      width: barcode.barWidth,
    },
  })

  return (
    <svg onClick={onclick} className={`barcode ${subclass}`} ref={inputRef} />
  )
}

export default Barcode

// setting for barcode https://www.npmjs.com/package/react-barcodes
