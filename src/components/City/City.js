import React from 'react';
import './City.css'

const City = (props) => {
 const {Name, img} = props.cart
   
    return (
        <div className="city">
         <h4>{Name}</h4>
         <img className="city-img" src={img} alt="" />
        </div>
    );
};

export default City;