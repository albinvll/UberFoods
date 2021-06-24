import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Burger } from "../../../src/assets/burder.jpg";

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

const CartItem = ({ cartItemData }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div style={{padding:'10px'}}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {cartItemData.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {cartItemData.price}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {cartItemData.qty}
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.cover} image={Burger} />
      </Card>
    </div>
  );
};

export default CartItem;
