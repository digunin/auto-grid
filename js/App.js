import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import NavBar from './components/navbar'
import { routesNames } from './utils'
import Setting from './components/setting'
import Print from './components/print'
import StyleTag from './components/styles'
import Provider from './store/provider'

const App = () => {
  return (
    <Provider>
      <Router>
        <StyleTag />
        <NavBar />
        <Route exact path={routesNames.home}>
          <Redirect to={routesNames.setting} />
        </Route>
        <Route path={routesNames.setting}>
          <Setting />
        </Route>
        <Route path={routesNames.print}>
          <Print />
        </Route>
      </Router>
    </Provider>
  )
}

export default App
