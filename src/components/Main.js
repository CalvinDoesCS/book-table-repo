import React,{ useReducer} from 'react'
import {Route, Routes, useNavigate} from "react-router-dom"
import Homepage from '../pages/Homepage.js'
import BookingPage from '../pages/BookingPage.js'
import Layout from '../pages/Layout.js'
import { fetchAPI, submitAPI } from '../api.js'
import BookingForm from './BookingForm.js'
import ConfirmedBooking from './ConfirmedBooking.js'

export function updateTimes(state, dispatch){
  return fetchAPI(new Date(dispatch));
}
export function initializeTimes(){
  const today = new Date();
  return fetchAPI(today);
}

const Main = () => {

  const [availableTimes, availableTimesDispatch] = useReducer(updateTimes,undefined,initializeTimes);
  const navigate = useNavigate();
  function submitForm(formData){
    if(submitAPI(formData)){
      navigate("/confirm-booking");
    }
  }

  return (
    <main>
      <Layout>
        <Routes> 
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} availableTimesDispatch={availableTimesDispatch} submitForm={submitForm}/>}></Route>
          <Route path="/confirm-booking" element={<ConfirmedBooking/>}></Route>
        </Routes>
      </Layout>
    </main>
  )
}

export default Main;