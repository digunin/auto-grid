import React from 'react'
import { NavLink } from 'react-router-dom'
import { routesNames } from '../utils'

const NavBar = () => {
  return (
    <nav>
      <div className="nav-links">
        <NavLink activeClassName="active" exact to={routesNames.home}>
          Настройки печати
        </NavLink>
        <NavLink activeClassName="active" to={routesNames.print}>
          Страница для печати
        </NavLink>
        <NavLink activeClassName="active" to={routesNames.about}>
          О программе
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
