import React, {useState, useEffect, useContext} from 'react';
import Food from './Food';
import './Foods.css'
import Navbar from '../Navbar/Navbar';
import {Link} from 'react-router-dom';
import client from '../../axios';

import { connect } from 'react-redux'

const Foods = (props) =>{

  const [products, setProducts] = useState([]);

  const currentRestaurantID = props.match.params.id;

  const fetchData = async () =>{
    await client.get("Articles/getArticlesFromRestaurantId",{
      params: {
        currentRestaurantID
      }
    }).then((res)=>{
      setProducts(res.data);
    })
  }

  useEffect(()=>{
    console.log(currentRestaurantID);
    fetchData();

  },[products])
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