import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navbar'
import { routesNames } from './utils'
import Settings from './pages/settings'
import Print from './pages/print'
import About from './pages/about'
import StyleTag from './components/styles'

const App = () => {
  return (
    <Router>
      <StyleTag />
      <NavBar />
      <Route exact path={routesNames.home}>
        <Settings />
      </Route>
      <Route path={routesNames.print}>
        <Print />
      </Route>
      <Route path={routesNames.about}>
        <About />
      </Route>
    </Router>
  )
}

export default App
