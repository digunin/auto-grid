import React from 'react'
import SublimePage from './sublimePage'
import useSettings from './useSettings'
import { getArrayWithIndexes } from '../utils'

const PrintSublime = () => {
  const { cards_count } = useSettings()
  let array_with_indexes = getArrayWithIndexes(cards_count)
  return (
    <>
      {array_with_indexes.map((index) => {
        return (
          <SublimePage
            page_number={index + 1}
            side="front"
            key={Date.now() + 'front'}
            index={index}
          />
        )
      })}
    </>
  )
}

export default PrintSublime
