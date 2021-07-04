import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Typography,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
const AddArticles = (props) => {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [cmimi, setCmimi] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRes, setSelectedRes] = useState(0);

  const insertArticle = async () => {
    const response = await client.post("Articles/insertArtikulli", {
      article: {
        id: 0,
        description: description,
        price: cmimi,
      },
      menuId: selectedRes,
    });
  };

  /*const getRestaurantsBasedOnCorpId = async () => {
    const currentCorpId = parseInt(localStorage.getItem("corporateId"));
    const response = await client.get("Restaurant/getRestaurantFromCorpId", {
      params: {
        CorpId: currentCorpId,
      },
    });
    console.log(response.data);
  };*/

  const fetchRestaurantsBasedOnCorpId = async () => {
    const currentCorpId = parseInt(localStorage.getItem("corporateId"));
    const response = await client.get("/Restaurant/getRestaurantFromCorpId", {
      params: {
        CorpId: currentCorpId,
      },
    });
    setRestaurants(response.data);
    console.log(response.data);
  };

  const onSubmitClick = async (event) => {
    event.preventDefault();
    try {
      if (description != "" && cmimi != "") {
        insertArticle();
        props.history.push("/dashboard");
      } else {
        alert("Empty fields!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRestaurantsBasedOnCorpId();
  }, []);
  //#region ONCHANGE
  const onNumberText = (event) => {
    setCmimi(event.target.value);
  };

  const onNameText = (event) => {
    setDescription(event.target.value);
  };

  const onSelectChange = (event) => {
    setSelectedRes(event.target.value);
  };

  //#endregion

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Uber Foods - Add article
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Article name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={onNameText}
          />
          <TextField
            variant="outlined"
            id="Price"
            label="Price"
            placeholder="2.5"
            variant="outlined"
            fullWidth
            onChange={onNumberText}
          />

          <FormControl variant="outlined" className={classes.form}>
            <InputLabel id="demo-simple-select-outlined-label">
              Restaurant
            </InputLabel>

            <Select
              labelId="demo-simple-select-outlined-label"
              required
              id="demo-simple-select-outlined"
              label="Restaurant"
              onChange={onSelectChange}
              defaultValue=""
            >
              {restaurants.map((res) => (
                <MenuItem key={res.id} value={res.menuId}>
                  {res.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
};

export default AddArticles;
