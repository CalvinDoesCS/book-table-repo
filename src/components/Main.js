import React,{useReducer, useState} from 'react'
import {Route, Routes} from "react-router-dom"
import Homepage from '../pages/Homepage.js'
import BookingPage from '../pages/BookingPage.js'
import Layout from '../pages/Layout.js'

export function updateTimes(selectedDate){
  return ["17:00","18:00","19:00","20:00","21:00","22:00"];
}
export function initializeTimes(){
  return ["17:00","18:00","19:00","20:00","21:00","22:00"];
}

const Main = () => {

  const [availableTimes, availableTimesDispatch] = useReducer(updateTimes,undefined,initializeTimes);

  
  return (
    <main>
      <Routes> 
        <Route path="/" element={<Layout><Homepage /></Layout>}></Route>
        <Route path="/booking" element={<Layout><BookingPage availableTimes={availableTimes} availableTimesDispatch={availableTimesDispatch}/></Layout>}></Route>
      </Routes>
    </main>
  )
}

export default Main;