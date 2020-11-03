import React from 'react'
import { useParams } from 'react-router-dom'

import burgers from '../data/burgers.json'
import { Burger } from './components/Burger'

export const ShowBurger = () => {
  const params = useParams()
  const burgerMatch = burgers.find((burger) => burger.slug === params.slug)
  console.log(burgerMatch)

  return (
    <div className="orderPage">
      <Burger name={burgerMatch.name} />
      <div>
        <button type="button">
          Order me!
        </button>
      </div>
    </div>
  )
}