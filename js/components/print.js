import React, { useContext } from 'react'
import Page from './page'
import Context from '../store/settingContext'

const Print = () => {
  const { front, back, txt, barcodes } = useContext(Context)
  let { data } = front.txt.txt1
  return (
    <>
      <Page
        img={front.bgImage}
        left_data={data.slice(0, 5)}
        right_data={data.slice(5)}
      />
      <Page
        img={back.bgImage}
        left_data={data.slice(5)}
        right_data={data.slice(0, 5)}
      />
    </>
  )
}

export default Print
