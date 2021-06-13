import React, {useState} from 'react'
import {Container,Avatar,Button, CssBaseline, TextField, Link, Grid,Box, Typography, makeStyles,InputLabel,MenuItem,FormHelperText,FormControl,Select   } from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Register() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [accountType, setAccountType] = useState('');
  const [payment, setPayment] = useState('');
  const [delivery, setDelivery] = useState('');
  const [coDescription, setCoDescription] = useState('');
  const [coEmail, setCoEmail] = useState('');
  const [coCity, setCoCity] = useState('');


  const onFirstNameText=(event)=>{
    setFirstName(event.target.value);
  }

  const onLastNameText=(event)=>{
    setLastName(event.target.value);
  }

  const onEmailText=(event)=>{
    setEmail(event.target.value);
  }

  const onPasswordText=(event)=>{
    setPassword(event.target.value);
  }

  const onAddressText=(event)=>{
    setAddress(event.target.value);
  }

  const onTypeText=(event)=>{
    setAccountType(event.target.value);
  }

  const onPaymentText=(event)=>{
    setPayment(event.target.value);
  }

  const onDeliveryText=(event)=>{
    setDelivery(event.target.value);
  }

  const onCoDescriptionText=(event)=>{
    setCoDescription(event.target.value);
  }

  const onCoEmailText=(event)=>{
    setCoEmail(event.target.value);
  }
  
  const onCoCityText=(event)=>{
    setCoCity(event.target.value);
  }

  
  return (
      <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
      </Avatar>
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
                <InputLabel id="demo-simple-select-outlined-label">Account type</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  required
                  id="demo-simple-select-outlined"
                  value={accountType}
                  onChange={onTypeText}
                  label="Account type"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Orderer'}>Orderer</MenuItem>
                  <MenuItem value={'Delivery'}>Delivery</MenuItem>
                  <MenuItem value={'Corporate'}>Corporate</MenuItem>
                </Select>
              </FormControl>
          </Grid>

          {accountType === 'Orderer' ? (
            <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="payment"
              label="Payment method"
              id="payment"
              onChange={onPaymentText}
            />
            </Grid>
          ) : accountType==='Delivery'?(
            <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="delivery"
              label="Delivery method"
              id="delivery"
              onChange={onPaymentText}
            />
          </Grid>
          ): accountType==='Corporate'?(
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
    <Box mt={5}>
    </Box>
  </Container>
  )
}
