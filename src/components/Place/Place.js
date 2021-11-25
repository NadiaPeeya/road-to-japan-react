import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Place.css'

const Place = (props) => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />
 
   
    const {img , Name, Region, Distance, Country, Transport, Budget} = props.place;
    return (
  
<div className="card-group">
  <div className="card card-style">
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title fw-bolder fs-4">{Name}</h5>
      <p> <strong><span className="fw-bolder">Region: </span>{Region}</strong> </p>
        <p> <strong><span className="fw-bolder"> Distance: </span>{Distance}</strong></p>
                <p><strong><span className="fw-bolder"> Country:</span> {Country} </strong> </p>
                <p> <strong> <span className="fw-bolder"> Transport:</span>  {Transport}</strong></p>
                <p> <strong><span className="fw-bolder"> Total Amount: </span>{Budget}</strong> </p>
            
    </div>
    <div className="card-footer">
    <button onClick={()=> props.handleAddToCart(props.place)} className="btn text-white text-center btn-large button-style"> {element} Grab It</button>
    </div>
  </div>
  
</div>

    
    );
};

export default Place;