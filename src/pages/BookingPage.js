import React from 'react'
import BookingForm from '../components/BookingForm'
import "../bookingpage.css"
const BookingPage = ({availableTimes, availableTimesDispatch,submitForm}) => {
  return (
    <div className="booking-container">
      <BookingForm availableTimes={availableTimes} availableTimesDispatch={availableTimesDispatch} submitForm={submitForm}/>
    </div>
  )
}

export default BookingPage