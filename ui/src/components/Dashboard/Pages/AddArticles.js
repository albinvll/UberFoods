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

export default function AddArticles(props) {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [cmimi,setCmimi] = useState("");

  const insertArticle = async () =>{
    const response = await client.post("Articles/insertArtikulli", {
        article: {
          id: 0,
          description: description,
          price: cmimi
        },
        menuId: 1
    });
  }

  const onSubmitClick = async (event) => {
    event.preventDefault();
    try { 
      if (description !="" && cmimi != "") {
        insertArticle();
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
    setCmimi(event.target.value);
  };

  const onNameText = (event) => {
    setDescription(event.target.value);
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
