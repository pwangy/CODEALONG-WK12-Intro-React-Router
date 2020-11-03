import React from 'react'
import { Link } from 'react-router-dom'

import burgers from 'data/burgers.json'
import { Burger } from '../components/Burger'

export const BurgerList = () => {
  return (
    <section className="burgers">
      {burgers.map((burger) => (
        <Link
          key={burger.id}
          to={`/burgers/${burger.slug}`}>
          <Burger
            name={burger.name}
            id={burger.id} />
        </Link>
      ))}
    </section>
  )
}