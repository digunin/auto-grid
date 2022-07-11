import React from 'react'
import { useSelector } from 'react-redux'
import PrintGrid from '../components/printGrid'
import PrintSublime from '../components/printSublime'

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
