import React from 'react'
import { NavLink } from 'react-router-dom'
import { routesNames } from '../utils'

const NavBar = () => {
  return (
    <nav>
      <div className="nav-links">
        <NavLink activeClassName="active" exact to={routesNames.home}>
          Домой
        </NavLink>
        <NavLink activeClassName="active" to={routesNames.setting}>
          Настройка печати
        </NavLink>
        <NavLink activeClassName="active" to={routesNames.print}>
          Печать
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
