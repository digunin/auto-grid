import React from 'react'
import Page from './page'
import { getArrayWithIndexes } from '../utils'
import useSettings from './useSettings'

const Print = () => {
  const { cards_count } = useSettings()
  let array_with_indexes = getArrayWithIndexes(cards_count)
  return (
    <>
      {array_with_indexes.map((data, i) => {
        return (
          <>
            <Page
              page_number={i + 1}
              side="front"
              key={Date.now() + 'front'}
              left_data={data.slice(0, 5)}
              right_data={data.slice(5)}
            />
            <Page
              page_number={i + 1}
              side="back"
              key={Date.now() + 'back'}
              left_data={data.slice(5)}
              right_data={data.slice(0, 5)}
            />
          </>
        )
      })}
    </>
  )
}

export default Print
