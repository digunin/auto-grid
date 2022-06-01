import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import GridPage from './gridPage'
import { getArrayWithIndexes } from '../utils'
import printingSelector from '../redux/selectors/printingSelector'

const PrintGrid = () => {
  const { cards_count, needPrint } = useSelector(printingSelector)
  let array_with_indexes = getArrayWithIndexes(
    cards_count === 0 ? 10 : cards_count,
    true
  )
  return (
    <>
      {array_with_indexes.map((data, i) => {
        return (
          <Fragment key={i}>
            {needPrint.front && (
              <GridPage
                page_number={i + 1}
                side="front"
                key={'front'}
                left_data={data.slice(0, 5)}
                right_data={data.slice(5)}
              />
            )}
            {needPrint.back && (
              <GridPage
                page_number={i + 1}
                side="back"
                key={'back'}
                left_data={data.slice(5)}
                right_data={data.slice(0, 5)}
              />
            )}
          </Fragment>
        )
      })}
    </>
  )
}

export default PrintGrid
