import React from 'react'
import { useSelector } from 'react-redux'
import PrintGrid from './printGrid'
import PrintSublime from './printSublime'

const Print = () => {
  const printingMode = useSelector((state) => state.common.printingMode)
  return (
    <>
      {printingMode == 'grid' && <PrintGrid />}
      {printingMode == 'sublime' && <PrintSublime />}
    </>
  )
}

export default Print
