import React from 'react';
import './Registration.css';
import Delivery from '../../../src/assets/delivery.svg';
import Restaurant from '../../../src/assets/restaurant.svg'
import {Link} from '@material-ui/core'

export default function Registration() {
    return (
      <div>
        <div className="titleSection">
          <h2>Want to work with us ?</h2>
          <p>
            <strong>Create an account and start working!</strong>
          </p>
        </div>
        <div className="content-section">
          <div className="delivery-container">
            <img src={Delivery} id="delivery-svg" />
            <h2>Delivery</h2>
            <p>
                Start working as a delivery <br/>
                
            </p>
            <Link href="/signup" id="link-id">
              <button id="account-button">Create account</button>
            </Link>
          </div>
          <div className="restaurant-container">
            <img src={Restaurant} id="restaurant-svg" />
            <h2>Restaurant</h2>
            <p>
                Start working as  restaurant
            </p>
            <Link href="/signup" id="link-id">
              <button id="account-button">Create account</button>
            </Link>
          </div>
        </div>
      </div>
    );
}
