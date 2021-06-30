import React, { useState } from "react";
import "./FrontFood.css";
import Burger from "../../../src/assets/burder.jpg";
import { connect } from "react-redux";
import { addToCart } from "../../redux/food-order/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Link } from "react-router-dom";



const FrontFood = ({ addToCart }) => {

  const [foods, setFoods] = useState([
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

  const notify = () => toast.success("Added to cart");

  return (
    <div className="mainSection">
      <div className="titleSection">
        <h1>
          <strong>Uberfood</strong> is here for you!
        </h1>
        <p>
          <strong>Not sure what to order? There are some suggestion</strong>
        </p>
      </div>

      <div className="contentSection">
        {foods.map((item, index) => (
          <div className="food-div" key={index}>
            <div className="food-img">
              <img src={Burger} />
            </div>
            <div className="food-desc">
              <h2>{item.description}</h2>
              <h4>${item.price}</h4>
              <button
                id="button-food"
                onClick={() => {
                  addToCart(item);
                  notify();
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(FrontFood);
