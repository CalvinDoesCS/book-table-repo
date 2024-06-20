import React from 'react'
import deliveryImg from '../icons_assets/delivery-svgrepo-com.svg'
const Card = ({food}) => {
  return (
    <div className="card">
        <img src={food.imageUrl} alt="Delicious food" className="card-image"/>
            <div className="card-content">
                <div className="card-heading">
                  <h3 className="card-title">{food.title}</h3>
                  <h3 className="card-price">{food.price}</h3>
                </div>
                <p className="card-description">{food.description}</p>
                <div className="card-delivery">
                  <p>Order a Delivery</p>
                  <img src={deliveryImg} alt="Truck" />
                </div>
            </div>
    </div>
  )
}

export default Card
