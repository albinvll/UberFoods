import React, {useState} from 'react';
import {Container,Button, CssBaseline, TextField,Box, Typography, makeStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core/';


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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function AddRestaurant() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [menu, setMenu] = useState('');


    const onNumberText = event =>{
        setNumber(event.target.value);
    }

    const onMenuText = event =>{
        setMenu(event.target.value);
    }

    const onNameText = event =>{
        setName(event.target.value);
    }

    const onAddressText = event =>{
        setAddress(event.target.value);
    }

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
                label = "Phone Number"
                placeholder = "+383 4x xxx xxx"
                defaultValue = {number}
                variant="outlined"
                fullWidth
                onChange = {onNumberText}
            />

            <FormControl variant="outlined" className={classes.form}>
                <InputLabel id="demo-simple-select-outlined-label">Payment Method</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  required
                  id="demo-simple-select-outlined"
                  value={menu}
                  label="Account type"
                  defaultValue={'CreditCard'}
                  onChange={onMenuText}
                >
                  <MenuItem value={'test'}>test</MenuItem>
                  <MenuItem value={'test'}>test</MenuItem>
 
                </Select>
              </FormControl>


          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add
          </Button>
        </form>
      </div>
    </Container>
    )
}