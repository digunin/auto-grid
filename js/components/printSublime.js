import React from 'react'
import SublimePage from './sublimePage'
import useSettings from './useSettings'
import { getArrayWithIndexes } from '../utils'

const PrintSublime = () => {
  const { cards_count, needPrint } = useSettings()
  let array_with_indexes = getArrayWithIndexes(cards_count)
  return (
    <>
      {array_with_indexes.map((index) => {
        return (
          <>
            {needPrint.front && (
              <SublimePage
                page_number={index + 1}
                side="front"
                key={Date.now() + 'front'}
                index={index}
              />
            )}
            {needPrint.back && (
              <SublimePage
                page_number={index + 1}
                side="back"
                key={Date.now() + 'front'}
                index={index}
              />
            )}
          </>
        )
      })}
    </>
  )
}

export default PrintSublime
