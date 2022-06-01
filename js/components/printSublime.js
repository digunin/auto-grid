import React from 'react'
import { useSelector } from 'react-redux'
import SublimePage from './sublimePage'
import { getArrayWithIndexes } from '../utils'
import printingSelector from '../redux/selectors/printingSelector'

const PrintSublime = () => {
  const { cards_count, needPrint } = useSelector(printingSelector)
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
