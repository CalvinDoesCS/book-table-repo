import React from 'react'
import Testimonials from './Testimonials'

const CustomersSay = () => {
  return (
    <>
      <h1 className="customer-say-title">What Customers Say About Us!</h1>
      <div className="customer-say-testimonials">
        <Testimonials customer={{name:"Emily Johnson",say:"Absolutely fantastic service! From start to finish, everything was smooth and efficient. The team was incredibly helpful and knowledgeable, and they went above and beyond to meet our needs. I highly recommend their services to anyone looking for top-notch quality and professionalism. Five stars all the way!"}}/>
        <Testimonials customer= {{name:"David Smith", say: "Working with Little Lemon has been a delight! Their team demonstrated impeccable professionalism and a genuine commitment to customer satisfaction. They made the entire experience smooth and enjoyable, and their attention to detail was remarkable. I couldn't be happier with the results. Five stars without hesitation!"}}/>
        <Testimonials customer= {{name:"Michael Chen", say:"Little Lemon provides exceptional service! From the initial consultation to the final delivery, their team was attentive, knowledgeable, and efficient. They truly went above and beyond to ensure my satisfaction. I highly recommend Little Lemon for their dedication to quality and customer care. A definite five-star experience!"}}/>
        <Testimonials customer= {{name:"Jessica Rodriguez", say: "I am incredibly impressed with Little Lemon! The team delivered outstanding service and exceeded all of my expectations. They were professional, responsive, and provided excellent guidance throughout the entire process. I would highly recommend them to anyone looking for top-notch quality and reliability. Five stars all the way!"}}/>
      </div>
    </>
  )
}

export default CustomersSay