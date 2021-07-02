import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../redux/food-order/actions";
import "../Foods/Foods.css";
import RestaurantImg from "../../../src/assets/restaurant.jpg";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Restaurant = ({ restaurantData, addToCart }) => {
  const [value, setValue] = React.useState(5);

  const notify = () => toast.success("Added to cart");

  return (
    <div className="food-container">
      <div className="food-image">
        <img src={RestaurantImg} alt="" style={{ width: "89%" }} />
      </div>
      <div className="food-desc">
        <div className="food-desc-title">
          <Link to={`/foods/${restaurantData.id}`}>
            <h5>{restaurantData.description}</h5>
          </Link>
        </div>

        <div className="food-desc-rating">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="simple-controlled" value={value} readOnly />
          </Box>
        </div>
      </div>
      <div className="food-action">
        <Link to={`/foods/${restaurantData.MenuId}`} style={{textDecoration:'none'}}>
          <button id="foodpage-action"> Check menu</button>
        </Link>
        <ToastContainer />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(Restaurant);
