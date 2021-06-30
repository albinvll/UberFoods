import React,{useState} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Burger from "../../../src/assets/burder.jpg";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';


import {connect} from 'react-redux';
import { removeFromCart, adjustQty } from "../../redux/food-order/actions";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const CartItem = ({ cartItemData, removeFromCart, adjustQty }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [input, setInput] = useState(cartItemData.qty);

  const onChangeHandler = (event)=>{
    event.preventDefault();
    setInput(event.target.value);
    adjustQty(cartItemData.id, event.target.value)
  }

  return (
    <div style={{ padding: "10px" }}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {cartItemData.description}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              ${cartItemData.price}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <input
                type="number"
                value={input}
                style={{ width: "30%" }}
                onChange={onChangeHandler}
              />
              <Tooltip title="Delete">
                <IconButton aria-label="delete" onClick={()=> removeFromCart(cartItemData.id)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={Burger}
          title="Contemplative Reptile"
        />
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>{
  return{
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id,value)),
  }
}

export default connect(null,mapDispatchToProps)(CartItem);
