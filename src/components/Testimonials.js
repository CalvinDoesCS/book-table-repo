import React from 'react'
import starImg from '../icons_assets/star.png'
import profileImg from '../icons_assets/Profile_avatar_placeholder_large.png'
const Testimonials = ({customer}) => {
  return (
    <div className="testimonials-container">
        <img src={profileImg} className="testimonails-img" alt="profile picture"/>
        <h3>{customer.name}</h3>
        <div className="star-container">
            <img src={starImg} alt="star"/>
            <img src={starImg} alt="star"/>
            <img src={starImg} alt="star"/>
            <img src={starImg} alt="star"/>
            <img src={starImg} alt="star"/>
        </div>
        <p>
            {customer.say}
        </p>
    </div>
  )
}

export default Testimonials