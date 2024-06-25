import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
const Layout = ({children}) => {
  return (
    <>
      <div id="nav-bar">
        <Header/>
        <Nav/>
      </div>
        {children}
      <Footer/>
    </>
  )
}

export default Layout