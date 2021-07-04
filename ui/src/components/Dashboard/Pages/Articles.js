import React, { useState, useEffect } from "react";
import { Link } from "@material-ui/core";
import client from "../../../axios";
import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core/";
import Burger from "../../../../src/assets/burder.jpg";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

const Articles = (props) => {
  const classes = useStyles();
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRes, setSelectedRes] = useState(0);
  const [articles, setArticles] = useState([]);


  const onDeleteClickButton = (event, id) =>{
    event.preventDefault();
    deleteArticleById(id);
  }

  const deleteArticleById = async(id)=>{
    const response = await client.delete("Articles/deleteArtikulliById",{
      params:{
        artikulliId: id
      }
    })
    props.history.push("/dashboard");
  }

  const fetchFoodsfromMenuId= async() =>{
    const response = await client.get("/Articles/getArticlesFromRestaurantId",{
      params:{
        menuId: selectedRes
      }
    });
    setArticles(response.data);
  }

  const fetchRestaurantsBasedOnCorpId = async () => {
    const currentCorpId = parseInt(localStorage.getItem("corporateId"));
    const response = await client.get("/Restaurant/getRestaurantFromCorpId", {
      params: {
        CorpId: currentCorpId,
      },
    });
    setRestaurants(response.data);
  };

  useEffect(() => {
    fetchRestaurantsBasedOnCorpId();
    fetchFoodsfromMenuId();
  }, [selectedRes, setSelectedRes]);

  const onSelectChange = (event) => {
    setSelectedRes(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <Link href="/add/article">
        <p>Add Articles</p>
      </Link>

      <p>Select a restaurant to see the articles of selected restaurant</p>
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

      {articles.map(article=>(
        <div className="food-container" key={article.id}>
        <div className="food-image">
          <img src={Burger} alt="burger" style={{width:'80%'}}/>
        </div>
        <div className="food-desc">
          <div className="food-desc-title">
            <h5>{article.description}</h5>
          </div>
          <div className="food-desc-price">
            <p>${article.price}</p>
          </div>
          <div className="food-desc-rating"></div>
        </div>
        <div className="food-action">
          <button id="foodpage-action">Edit</button>
          <button id="foodpage-action" onClick={(event)=>onDeleteClickButton(event, article.id)}>Delete</button>
        </div>
      </div>
      
      ))}
      </div>
  );
};

export default Articles;
