import Footer from "../components/Footer.js"
import "../homepage.css"
import foodImage from '../icons_assets/restauranfood.jpg'
import Button from '../components/Button.js'
import Specials from '../components/Specials.js'
import CustomersSay from '../components/CustomersSay.js'
import Chicago from '../components/Chicago.js'
import Header from '../components/Header.js'
import Nav from '../components/Nav.js'
const Homepage = () => {
  return (
    <>
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
      <CustomersSay/>
      <Chicago/>
    </>
  )
}

export default Homepage