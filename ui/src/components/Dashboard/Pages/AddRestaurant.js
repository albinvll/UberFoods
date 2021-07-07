import React, { useState } from "react";
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core/";
import client from "../../../axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddRestaurant(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");


  const validateName = () =>{
    if(name.trim().length === ""){
      return false;
    }else{
      return true;
    }
  }

  const validateAddress = () =>{
    if(address.trim().length === ""){
      return false;
    }else{
      return true;
    }
  }

  const validateNumber = () =>{
    if(number.trim().length === ""){
      return false;
    }else{
      return true;
    }
  }

  

  const createRestaurant = async () =>{
    const currentCorpId = parseInt(localStorage.getItem("corporateId"));
    const response = await client.post("/Restaurant/createRestaurant", {
      restaurant: {
        id: 0,
        corporateId: currentCorpId,
        description: name,
        addressId: 0,
        telephoneNr: number,
        menuId: 0,
      },
      adresa: {
        id: 0,
        description: address,
        adresaX: 1.1,
        adresaY: 1.1,
        adresaZ: 1.1,
      },
    });
  }

  const onSubmitClick = async (event) => {
    event.preventDefault();
    try { 
      if (validateName && validateAddress && validateNumber) {
        createRestaurant();
        props.history.push("/dashboard")
      } else {
        alert("Empty fields!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  //#region ONCHANGE
  const onNumberText = (event) => {
    setNumber(event.target.value);
  };

  const onNameText = (event) => {
    setName(event.target.value);
  };

  const onAddressText = (event) => {
    setAddress(event.target.value);
  };

  //#endregion

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Uber Foods - Add Restaurant
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Restaurant Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={onNameText}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="address"
            label="Restaurant Address"
            name="address"
            autoComplete="address"
            onChange={onAddressText}
          />
          <TextField
            variant="outlined"
            id="PhoneNumber"
            label="Phone Number"
            placeholder="+383 4x xxx xxx"
            defaultValue={number}
            variant="outlined"
            fullWidth
            onChange={onNumberText}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmitClick}
          >
            Add
          </Button>
        </form>
      </div>
    </Container>
  );
}
