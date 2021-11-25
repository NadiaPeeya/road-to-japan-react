import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Place from '../Place/Place';
import './Places.css';

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('./places.JSON')
        .then(res => res.json())
        .then(data => setPlaces(data))
    }, [])
    const handleAddToCart = (place) => {
     const newCart = [...cart, place]
     setCart(newCart)
    }
    return (
        <div className="tour-container">
            <div className="places-container">
            
              {
                  places.map(place => <Place
                    key={place.id}
                    place={place}
                    handleAddToCart={handleAddToCart}
                    ></Place>)
              }
            </div>
            <div className="cart-container my-5">
              <Cart cart={cart}></Cart>
            </div> 
        </div>
    );
};

export default Places;