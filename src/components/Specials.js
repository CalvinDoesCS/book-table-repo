import React from 'react'
import Button from './Button.js'
import Card from "./Card.js"
import greekSaladImg from '../icons_assets/greek_salad.jpg'
import bruchettaImg from '../icons_assets/bruchetta.svg'
import lemonDesert from '../icons_assets/lemon dessert.jpg'
const Specials = () => {
  return (
    <div className="special-container">
      <h1 className="special-title">This weeks specials!</h1>
      <Button>Online Menu</Button>
      <Card food={{title:"Greek Salad", price:"$12.99", description:"This famouse greek salad of crispy lettuce, peppers, olives and out Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", imageUrl:greekSaladImg}}/>
      <Card food={{title:"Bruchetta", price:"$5.99", description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.", imageUrl:bruchettaImg}}/>
      <Card food={{title:"Lemon Dessert", price:"5.00", description:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.", imageUrl:lemonDesert}}/>
    </div>
  )
}

export default Specials