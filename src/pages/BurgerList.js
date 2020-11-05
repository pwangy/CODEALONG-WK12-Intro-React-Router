import React from 'react'
import { Link } from 'react-router-dom'

import burgers from 'data/burgers.json'
import { Burger } from '../components/Burger'

export const BurgerList = () => {
  return (
    <section className="burgers">
      {burgers.map((burger) => (
        <Link key={burger.id} to={`/burgers/${burger.slug}`}>
          <Burger name={burger.name} id={burger.id} />
          {/* or you could use the following to pass all params: <Burger { ...burger } /> */}
        </Link>
      ))}
    </section>
  )
}
// this is the map function to show all the cards. this is also the container for the cards