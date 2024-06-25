import React from 'react'
import chefImg from '../icons_assets/Mario and Adrian A.jpg'
import restaurantImg from '../icons_assets/restaurant.jpg'
const Chicago = () => {
  return (
    <div className='chicago-container'>
      <div className='chicago-text'>
        <h1> Little Lemon</h1>
        <h2> Chicago </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div className='chicago-img'>
         <img id="overlap-img" src={chefImg} alt="Mario and Adiran"/>
         <img src={restaurantImg} alt="Restaruant"/>
      </div>
    </div>
  )
}

export default Chicago