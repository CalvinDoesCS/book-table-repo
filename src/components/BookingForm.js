import React, { useState } from 'react'
import { useFormik } from 'formik';
const BookingForm = ({availableTimes, availableTimesDispatch,submitForm}) => {

    const formik = useFormik({
        initialValues: {
            date: new Date().toISOString().split('T')[0],
            time: '',
            guests: 1,
            occasion: 'Birthday'
        },
        onSubmit: values => {
          submitForm(values);
        },
      });
  return (
    <>
        <h1> Booking Form </h1>
        <form className='form-container' onSubmit={formik.handleSubmit}>
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" onChange={(e)=>{
                availableTimesDispatch(formik.values.date);
                formik.setValues({...formik.values, ["date"]: e.target.value});
            }
            } value={formik.values.date}/>
            <label htmlFor="time">Choose time</label>
            <select id="time" onChange={formik.handleChange}>
                {
                   availableTimes.map(time => <option key={time} value={time}>{time}</option>)
                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" onChange={formik.handleChange} value={formik.values.guests}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={formik.handleChange} value={formik.values.occasion}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    </>
  )
}

export default BookingForm