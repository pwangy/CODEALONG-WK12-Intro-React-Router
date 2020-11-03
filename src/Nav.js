import React from 'react'
import { Link, NavLink } from 'react-router-dom'

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
