import React, { Component } from 'react';
import './FrontFood.css';
import Burger from '../../../src/assets/burder.jpg'

export default class FrontFood extends Component {

  state={
    foods : [
      {
        description:'Hamberger Aba',
        price:'1.00'
      },
      {
        description:'Hamberger Aba',
        price:'1.00'
      },
      {
        description:'Hamberger Aba',
        price:'1.00'
      },
      {
        description:'Hamberger Aba',
        price:'1.00'
      }
    ]
  }

  render() {
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
          {this.state.foods.map((item, index) => (
            <div className="food-div" key={index}>
              <div className="food-img">
                <img src={Burger} />
              </div>
              <div className="food-desc">
                <h2>{item.description}</h2>
                <h4>${item.price}</h4>
                <button id="button-food">Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
