import React from 'react'
import { Route } from 'react-router-dom'

export const Burger = ({ name }) => (
  <div className="burger">
    <h3>
      {name}
    </h3>
    <p>I am a burger!</p>
    <Route path="/Burgers" exact>
      Hey from the list!
    </Route>
  </div>
)

// info for each card