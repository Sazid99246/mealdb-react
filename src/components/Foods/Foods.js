import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[])
    const handleAddToCart = food =>{
        console.log(food);
        // cart.push(food);
        const newCart = [...cart, food]
        setCart(newCart);
    }
    return (
        <div>
            <div className='row container'>
                <div className='col-8 row row-cols-lg-3 row-cols-sm-2 g-4'>
                {
                    foods.map(food => <Food
                    key={food.idMeal}
                    food = {food}
                    handleAddToCart = {handleAddToCart}
                    ></Food>)
                }
                </div>
                <div className='col-4 cart'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Foods;