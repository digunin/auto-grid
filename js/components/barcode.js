import React from 'react'
import { useBarcode } from 'react-barcodes'

const Barcode = ({ subclass, value }) => {
  const { inputRef } = useBarcode({
    value: value,
    options: {
      format: 'ean13',
      background: '#ffffff',
      marginTop: 4,
      marginBottom: 4,
      fontOptions: 'bold',
      textMargin: 0,
    },
  })

  return <svg className={`barcode ${subclass}`} ref={inputRef} />
}

export default Barcode

// setting for barcode https://www.npmjs.com/package/react-barcodes
