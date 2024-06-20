import React from 'react'
import foodImage from '../icons_assets/restauranfood.jpg'
import Button from '../components/Button.js'
import Specials from './Specials.js'
const Main = () => {
  return (
    <main>
      <div className='header-background'>
        <div className='header-container'>
          <div className='header-text'>
            <h1> Little Lemon</h1>
            <h2> Chicago </h2>
            <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <Button>Reserve A Table</Button>
          </div>
          <div className='header-img'>
            <img src={foodImage} alt="man holding food"/>
          </div>
        </div>
      </div>
      <Specials/>
    </main>
  )
}

export default Main