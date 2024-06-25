import React, { useState } from 'react'

const BookingForm = () => {
    
    const [availableTimes, setAvailableTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"])
    const [formData, setFormData] = useState({
        "res-date": '',
        "res-time": '17:00',
        guests: 1,
        occasion: 'Birthday'
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [id]: value
        }));
    }; 
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission
        console.log(formData);
      };
  return (
    <>
        <form className='form-container' onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={handleChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={handleChange}>
                {availableTimes.map(time => <option key={time}>{time}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChange}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    </>
  )
}

export default BookingForm