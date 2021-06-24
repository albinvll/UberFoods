import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart-mainSection">
      <div className="cart-title">
        <h1>Your cart</h1>
      </div>
      <div className="cart-content-items">
          {cart.map((item)=>(
              <CartItem key={item.id} cartItemData={item}/>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.food.cart,
  };
};

export default connect(mapStateToProps)(Cart);
