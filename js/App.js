import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navbar'
import { routesNames } from './utils'
import Home from './components/home'
import Setting from './components/settings/setting'
import PrintGrid from './components/printGrid'
import PrintSublime from './components/printSublime'
import StyleTag from './components/styles'
import Provider from './store/provider'

const App = () => {
  return (
    <Provider>
      <Router>
        <StyleTag />
        <NavBar />
        <Route exact path={routesNames.home}>
          <Home />
        </Route>
        <Route path={routesNames.setting}>
          <Setting />
        </Route>
        <Route path={routesNames.printGrid}>
          <PrintGrid />
        </Route>
        <Route path={routesNames.printSublime}>
          <PrintSublime />
        </Route>
      </Router>
    </Provider>
  )
}

export default App
