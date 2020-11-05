import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import burgers from '../data/burgers.json'
import { Burger } from '../components/Burger'

export const ShowBurger = () => {
  const { slug } = useParams()
  // const { params } = useParams()
  const history = useHistory()
  const burgerMatch = burgers.find((burger) => burger.slug === slug)
  // const burgerMatch = burgers.find((burger) => burger.slug === params.slug)

  console.log(burgerMatch)

  if (!burgerMatch) {
    history.push('/burgers')
    // return (
    //   <div>Not found!</div>
    // )
  }

  return (
    <div className="orderPage">
      <Burger {...burgerMatch} />
      {/* <Burger name={burgerMatch.name} />  */}
      <div>
        <button type="button">
          Order me!
        </button>
      </div>
    </div>
  )
}

// individual burger page where user can order.