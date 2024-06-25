import React from 'react'
import {Route, Routes} from "react-router-dom"
import Homepage from '../pages/Homepage.js'
import BookingPage from '../pages/BookingPage.js'
import Layout from '../pages/Layout.js'
const Main = () => {
  return (
    <main>
      <Routes> 
        <Route path="/" element={<Layout><Homepage /></Layout>}></Route>
        <Route path="/booking" element={<Layout><BookingPage /></Layout>}></Route>
      </Routes>
    </main>
  )
}

export default Main