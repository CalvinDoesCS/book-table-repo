import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><Link to={"/booking"}>Reservation</Link></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav