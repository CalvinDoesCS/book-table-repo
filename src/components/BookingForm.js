import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = ({ availableTimes, availableTimesDispatch, submitForm }) => {
  const BookingSchema = Yup.object().shape({
    date: Yup.date().required('Required'),
    time: Yup.string().required('Required'),
    guests: Yup.number().min(1, "Must be greater than 0").max(10, "Must be less than 10").required('Required'),
    occasion: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      date: new Date().toISOString().split('T')[0],
      time: '17:00',
      guests: 1,
      occasion: 'Birthday',
    },
    validationSchema: BookingSchema,
    onSubmit: values => {
      submitForm(values);
    },
  });

  return (
    <>
      <h1>Booking Form</h1>
      <form
        className='form-container'
        onSubmit={formik.handleSubmit}
        noValidate
        aria-labelledby="booking-form-title"
      >
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          onChange={(e) => {
            availableTimesDispatch(formik.values.date);
            formik.setValues({ ...formik.values, ["date"]: e.target.value });
          }}
          value={formik.values.date}
          aria-required="true"
          aria-invalid={formik.touched.date && formik.errors.date ? 'true' : 'false'}
          aria-describedby="date-error"
        />
        {formik.touched.date && formik.errors.date && (
          <div id="date-error" className='error'>{formik.errors.date}</div>
        )}

        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          onChange={formik.handleChange}
          aria-required="true"
          aria-invalid={formik.touched.time && formik.errors.time ? 'true' : 'false'}
          aria-describedby="time-error"
        >
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time && (
          <div id="time-error" className='error'>{formik.errors.time}</div>
        )}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          onChange={formik.handleChange}
          value={formik.values.guests}
          aria-required="true"
          aria-invalid={formik.touched.guests && formik.errors.guests ? 'true' : 'false'}
          aria-describedby="guests-error"
        />
        {formik.touched.guests && formik.errors.guests && (
          <div id="guests-error" className='error'>{formik.errors.guests}</div>
        )}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          onChange={formik.handleChange}
          value={formik.values.occasion}
          aria-required="true"
          aria-invalid={formik.touched.occasion && formik.errors.occasion ? 'true' : 'false'}
          aria-describedby="occasion-error"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion && (
          <div id="occasion-error" className='error'>{formik.errors.occasion}</div>
        )}

        <input
          className="button"
          type="submit"
          value="Make Your reservation"
          aria-labelledby="submit-button"
        />
      </form>
    </>
  );
};

export default BookingForm;
