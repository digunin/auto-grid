import React, { useContext } from 'react'
import Page from './page'
import Context from '../store/settingContext'

const Print = () => {
  const { front, back, cards_count } = useContext(Context)
  let array_with_indexes = []
  let tmp = []
  for (let i = 0; i < cards_count; i++) {
    tmp.push(i)
    if (tmp.length === 10) {
      array_with_indexes.push(tmp)
      tmp = []
    }
  }
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
