import React from 'react'

const Barcode = ({ subclass, value }) => {
  return <div className={`barcode ${subclass}`}>{value}</div>
}

export default Barcode
