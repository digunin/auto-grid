import React from 'react'
import PrintGrid from './printGrid'
import PrintSublime from './printSublime'
import useSettings from './useSettings'

const Print = () => {
  const { printingMode } = useSettings()
  return (
    <>
      {printingMode == 'grid' && <PrintGrid />}
      {printingMode == 'sublime' && <PrintSublime />}
    </>
  )
}

export default Print
