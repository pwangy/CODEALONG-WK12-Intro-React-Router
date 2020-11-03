import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Welcome } from './Welcome'
import { About } from './About'
import { Contact } from './Contact'
import { Nav } from './Nav'
import { BurgerList } from './pages/BurgerList'
import { ShowBurger } from './pages/ShowBurgers'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Nav />

        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/burgers" exact>
            <BurgerList />
          </Route>
          <Route path="/burgers/:slug" exact>
            <ShowBurger />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}