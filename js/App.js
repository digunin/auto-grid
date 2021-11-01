import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Page from './components/page'
import NavBar from './components/navbar'
import frontjpg from '../images/front.jpg'
import backjpg from '../images/back.jpg'
import { routesNames } from './utils'

const App = () => {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <Router>
      <NavBar />
      <Route exact path={routesNames.home}>
        <Redirect to={routesNames.setting} />
      </Route>
      <Route path={routesNames.setting}>
        <h1>Заглушка для настроек</h1>
      </Route>
      <Route path={routesNames.print}>
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
      </Route>
    </Router>
  )
}

export default App
