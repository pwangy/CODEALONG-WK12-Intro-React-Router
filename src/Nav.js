import React from 'react'
import { Link, NavLink, Route } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <h1>
        <NavLink to="/">
          BigCorp Inc
        </NavLink>
      </h1>

      <ul>
        <li>
          <NavLink to="/burgers">
            Burgers
          </NavLink>
        </li>
        <Route path="/burgers">
          <li>
            <Link to="/">
              Back home
            </Link>
          </li>
        </Route>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
