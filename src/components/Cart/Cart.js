import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div className='cart-container'>
            <h4>Selected Items: {cart.length}</h4>
            {
                cart.map(food => <li>{food.strMeal}</li>)
            }
        </div>
    );
};

export default Cart;