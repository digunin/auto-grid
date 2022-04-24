import React, { Fragment } from 'react'
import GridPage from './gridPage'
import { getArrayWithIndexes } from '../utils'
import useSettings from './useSettings'

const PrintGrid = () => {
  const { cards_count, needPrint } = useSettings()
  let array_with_indexes = getArrayWithIndexes(cards_count, true)
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
