import React from 'react';
import City from '../City/City';
import './Cart.css';
const Cart = (props) => {

    const {cart} = props
    let total = 0;
    for(const place of cart){
    total = total + place.Budget 
    }
  
    return (
        <div className="container mx-auto cart-style">
            <h3>Choosed Places: {props.cart.length} </h3>
            <h3>Total $ {total}</h3>  
            <hr />       
             {
                 cart.map(cart => <City key={cart.Name} cart={cart}></City>)
             }
        </div>
    );
};

export default Cart;