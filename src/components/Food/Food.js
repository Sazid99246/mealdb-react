import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Food = ({food, handleAddToCart}) => {

    const {strMeal, strMealThumb} = food;
    return (
        <div className='col'>
            <div className="card">
                <img className='img-fluid card-img-top' src={strMealThumb} alt="" />
                <div className="card-body">
                    <h3>{strMeal}</h3>
                    <button onClick={()=>handleAddToCart(food)} className='btn btn-success'>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>   Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Food;