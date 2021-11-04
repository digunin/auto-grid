import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import NavBar from './components/navbar'
import { routesNames, defaultSeting } from './utils'
import Setting from './components/setting'
import Print from './components/print'
import Context from './components/settingContext'

const App = () => {
  return (
    <Context.Provider value={defaultSeting}>
      <Router>
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
    </Context.Provider>
  )
}

export default App
