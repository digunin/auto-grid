import React from 'react'
import Page from './components/page'
import frontjpg from '../images/front.jpg'
import backjpg from '../images/back.jpg'

const App = () => {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      <Page
        img={frontjpg}
        left_data={data.slice(0, 5)}
        right_data={data.slice(5)}
      />
      <Page
        img={backjpg}
        left_data={data.slice(5)}
        right_data={data.slice(0, 5)}
      />
    </>
  )
}

export default App
