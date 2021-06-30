import React, {useState} from 'react';
import Food from './Food';
import './Foods.css'
import Navbar from '../Navbar/Navbar';
import {Link} from 'react-router-dom'

import { connect } from 'react-redux'

const Foods = () =>{

  const [products, setProducts] = useState([
    {
      id: 1,
      description: "Hamburger",
      price: "1.50",
    },
    {
      id: 2,
      description: "Hamberger Aba",
      price: "1.00",
    },
    {
      id: 3,
      description: "Hamberger Shtepie",
      price: "2.00",
    },
    {
      id: 4,
      description: "Hamburger Pule",
      price: "2.50",
    },
  ]);

    return (
      <div>
        <Navbar />

        <div className="foods-mainSection">
          <div className="foods-food-container">
            <h3>Foods</h3>
            <p>Choose the food you love the most!</p>

            {products.map((food) => (
              <Food key={food.id} foodData={food} />
            ))}
          </div>
          <div className="foods-right-container">
            <div className="food-right-title">
              <h4 style={{textDecoration:'none'}}>Found the food you were looking ?</h4>
              <p>Go to your cart and procced to the payment!</p>
            </div>
            <Link to="/cart">
              <button className="food-right-button">Continue to your cart</button>
            </Link>
          </div>
        </div>
      </div>
    );
}


export default Foods;