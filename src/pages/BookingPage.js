import React from 'react'
import BookingForm from '../components/BookingForm'
import "../bookingpage.css"
const BookingPage = ({availableTimes, availableTimesDispatch}) => {
  return (
    <div>
      <BookingForm availableTimes={availableTimes} availableTimesDispatch={availableTimesDispatch}/>
    </div>
  )
}

export default BookingPage