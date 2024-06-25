import React from 'react'
import logo from '../icons_assets/Logo.svg'

const Footer = () => {
  return (
    <footer>
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div>
          <h3>Nav</h3>
          <ul>
            <li> Home </li>
            <li> About </li>
            <li> Menu </li>
            <li> Reservation </li>
            <li> Order Online </li>
            <li> Login </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li> Address </li>
            <li> Phone Number </li>
            <li> Email </li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li> Facebook </li>
            <li> Instagram </li>
            <li> Linkeln </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer