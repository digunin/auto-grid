import React from 'react'
import SublimePage from './sublimePage'
import useSettings from './useSettings'

const PrintSublime = () => {
  const { cards_count } = useSettings()
  let array_with_indexes = new Array(cards_count).fill(0)
  console.log(array_with_indexes)
  return (
    <>
      {array_with_indexes.map((data, i) => {
        return (
          <SublimePage
            page_number={i + 1}
            side="front"
            key={Date.now() + 'front'}
            index={i}
          />
        )
      })}
    </>
  )
}

export default PrintSublime
