import React, { useContext } from 'react'
import Page from './page'
import Context from '../store/settingContext'

const Print = () => {
  const { front_img, back_img, data_set } = useContext(Context)
  let { data } = data_set.txt.txt1
  return (
    <>
      <Page
        img={front_img}
        left_data={data.slice(0, 5)}
        right_data={data.slice(5)}
      />
      <Page
        img={back_img}
        left_data={data.slice(5)}
        right_data={data.slice(0, 5)}
      />
    </>
  )
}

export default Print
