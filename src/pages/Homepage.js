import React from 'react'
import Header from '../components/Header.js'
import Nav from '../components/Nav.js'
import Main from '../components/Main.js'
import Footer from "../components/Footer.js"
import "../app.css"
const Homepage = () => {
  return (
    <>
      <div id="nav-bar">
        <Header/>
        <Nav/>
      </div>
      <Main/>
       {/* <Footer/> */}
    </>
  )
}

export default Homepage