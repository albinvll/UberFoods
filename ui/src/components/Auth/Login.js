import React, {useState} from 'react';
import {Container,Avatar,Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid,Box, Typography, makeStyles, MenuItem,FormControl,Select,InputLabel } from '@material-ui/core/';

  
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

export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('');

    const onTypeText=(event)=>{
      setAccountType(event.target.value);
    }

    const onEmailText = event =>{
      setEmail(event.target.value);
    }

    const onPasswordText = event =>{
      setPassword(event.target.value);
    }
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Uberfoods - Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

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
                  <MenuItem value={'Orderer'}>Orderer</MenuItem>
                  <MenuItem value={'Delivery'}>Delivery</MenuItem>
                  <MenuItem value={'Corporate'}>Corporate</MenuItem>
                </Select>
              </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an account ? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    )
}
