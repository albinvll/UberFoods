import React, { useState } from "react";
import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core/";
import client from "../../axios";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(props) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [accountType, setAccountType] = useState(1);
  const [payment, setPayment] = useState(1);
  const [delivery, setDelivery] = useState("");
  const [coDescription, setCoDescription] = useState("");
  const [coEmail, setCoEmail] = useState("");
  const [coCity, setCoCity] = useState("");

  //#region ONCHANGE

  const onFirstNameText = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameText = (event) => {
    setLastName(event.target.value);
  };

  const onEmailText = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordText = (event) => {
    setPassword(event.target.value);
  };

  const onAddressText = (event) => {
    setAddress(event.target.value);
  };

  const onTypeText = (event) => {
    setAccountType(event.target.value);
  };

  const onPaymentText = (event) => {
    setPayment(event.target.value);
  };

  const onDeliveryText = (event) => {
    setDelivery(event.target.value);
  };

  const onCoDescriptionText = (event) => {
    setCoDescription(event.target.value);
  };

  const onCoEmailText = (event) => {
    setCoEmail(event.target.value);
  };

  const onCoCityText = (event) => {
    setCoCity(event.target.value);
  };
  
  //#endregion 


  //#region VALIDATE
  const validateFirstName = () => {
    if (firstName.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const validateLastName = () => {
    if (lastName.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const validateEmail = () => {
    if (email.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = () => {
    if (password.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const validateAddress = () => {
    if (address.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const validateDelivery = () => {
    if (delivery.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const validateCoDesc = () => {
    if (coDescription.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const validateCoEmail = () => {
    if (coEmail.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const validateCoCity = () => {
    if (coCity.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const validatePayment = () => {
    if (payment.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  //#endregion
  
  
  //#region API CALLS
  const createOrderer = async () => {
    const response = await client.post("Account/createOrdererAccount", {
      id: 0,
      name: firstName,
      surname: lastName,
      email: email,
      address: address,
      password: password,
      paymentType: 1,
    });
  };

  const createDeliveryAccount = async () => {
    const response = await client.post("Account/createDeliveryAccount", {
      id: null,
      name: firstName,
      surname: lastName,
      email: email,
      address: address,
      password: password,
      deliveryType: delivery,
    });
  };

  const createCorporateAccount = async () => {
    const response = await client.post("Account/createCorporateAccount", {
      corporate: {
        description: coDescription,
        email: coEmail,
        city: coCity,
      },
      account: {
        id: null,
        name: firstName,
        surname: lastName,
        email: email,
        address: address,
        password: password,
      },
    });
  };

  //#endregion

  const submitSignUp = async () => {
    try {
      if (
        validateFirstName &&
        validateLastName &&
        validatePassword &&
        validateAddress &&
        validateEmail
      ) {
        if (accountType === 1) {
          if (validatePayment()) {
            createOrderer();
          }
        } else if (accountType === 2) {
          if (validateDelivery()) {
            createDeliveryAccount();
          }
        } else {
          if (validateCoEmail && validateCoDesc && validateCoCity) {
            createCorporateAccount();
          }
        }
        props.history.push("/login");
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const onSubmitClick = (event) => {
	  event.preventDefault();
	  submitSignUp();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Uberfoods - Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={onFirstNameText}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={onLastNameText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={onEmailText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onPasswordText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Address"
                id="address"
                onChange={onAddressText}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.form}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Account type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  required
                  id="demo-simple-select-outlined"
                  value={accountType}
                  onChange={onTypeText}
                  label="Account type"
                >
                  <MenuItem value={1}>Orderer</MenuItem>
                  <MenuItem value={2}>Delivery</MenuItem>
                  <MenuItem value={3}>Corporate</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {accountType === 1 ? (
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.form}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Payment Method
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    required
                    id="demo-simple-select-outlined"
                    value={payment}
                    onChange={onPaymentText}
                    label="Account type"
                    defaultValue={1}
                  >
                    <MenuItem value={1}>Credit Card</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            ) : accountType === 2 ? (
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="delivery"
                  label="Delivery method"
                  id="delivery"
                  onChange={onDeliveryText}
                />
              </Grid>
            ) : accountType === 3 ? (
              <Grid item xs={12}>
                <TextField
                  className={classes.form}
                  variant="outlined"
                  required
                  fullWidth
                  name="description"
                  label="Corporate description"
                  id="description"
                  onChange={onCoDescriptionText}
                />
                <TextField
                  className={classes.form}
                  variant="outlined"
                  required
                  fullWidth
                  name="email"
                  label="Corporate e-mail"
                  id="coemail"
                  onChange={onCoEmailText}
                />
                <TextField
                  className={classes.form}
                  variant="outlined"
                  required
                  fullWidth
                  name="city"
                  label="City"
                  id="city"
                  onChange={onCoCityText}
                />
              </Grid>
            ) : null}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmitClick}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
