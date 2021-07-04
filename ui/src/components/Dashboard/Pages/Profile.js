import React,{useState, useEffect} from "react";
import {
  Container,
  CssBaseline,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core/";
import client from '../../../axios';

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

const Profile = () => {
  const classes = useStyles();
  const [user, setUser] = useState([]);

  const currentUserId = parseInt(localStorage.getItem("userId"));

  const fetchUserById= async()=>{
    const response = await client.get("/Account/getUserById",{
        params:{
            userId: currentUserId
        }
    })
    setUser(response.data);
    console.log(response.data);
    
  }

  useEffect(()=>{
    fetchUserById();
  },[])

  return (
    <>
    {user.map(res=>(
        <Container component="main" maxWidth="xs" key={res.id}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Uber Foods - Profile
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              defaultValue={res.name}
              disabled
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="Mbiemri"
              label="Mbiemri"
              defaultValue={res.surname}
              variant="outlined"
              fullWidth
              disabled
            />
  
            <TextField
              variant="outlined"
              margin="normal"
              id="Email"
              label="Email"
              defaultValue={res.email}
              variant="outlined"
              fullWidth
              disabled
            />
  
            <TextField
              type="password"
              margin="normal"
              variant="outlined"
              id="Password"
              label="Password"
              defaultValue={res.password}
              variant="outlined"
              fullWidth
              disabled
            />
          </form>
        </div>
      </Container>
    ))}
    </>
  );
};

export default Profile;
