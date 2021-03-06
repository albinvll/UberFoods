import React, { Component, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import ResIMG from "../../../assets/restaurant.jpg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./Restaurants.css";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Link } from "@material-ui/core";
import client from "../../../axios";

export class Restaurants extends Component {
  constructor(props){
    super(props);
  }
  state = {
    restaurants: [],
  };

  //#region DELETEAPI
  deleteRestaurantById = async (id, menuId) =>{
    const response = await client.delete("Restaurant/deleteRestaurantById",{
      params:{
        restaurantId: id,
        menuId: menuId
      }
    })
  }
  onClickDeleteRestaurant = async(event,id, menuId) =>{
    event.preventDefault();
    await this.deleteRestaurantById(id, menuId);
    await this.fetchRestaurantsBasedOnCorpId();
  }
  //#endregion
  
  //#region FETCHRESTAURANTS API
  fetchRestaurantsBasedOnCorpId = async () => {
    const currentCorpId = parseInt(localStorage.getItem("corporateId"));
    const response = await client.get("Restaurant/getRestaurantFromCorpId", {
      params: {
        CorpId: currentCorpId,
      },
    });
    this.setState({ restaurants: response.data });
  };
  //#endregion
  componentDidMount = () => {
    this.fetchRestaurantsBasedOnCorpId();
  };

  render() {
    return (
      <div>
        <h2 style={{ color: "#8c000a", fontWeight: 900 }}>Restaurants</h2>
        <div className="tool-tip">
          <Tooltip title="Add" aria-label="add" className="tooltip-button">
            <Fab color="secondary">
              <Link href="add/restaurant">
                <AddIcon />
              </Link>
            </Fab>
          </Tooltip>
        </div>
        <TableContainer component={Paper} style={{ width: "90%" }}>
          <Table aria-label="simple table" className="res-table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>#</TableCell>
                <TableCell>Restaurant Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.restaurants.map((res) => (
                <TableRow key={res.id}>
                  <TableCell>
                    <strong>{res.id}</strong>
                  </TableCell>
                  <TableCell>
                    <Avatar alt="Restaurant" src={ResIMG} />
                  </TableCell>
                  <TableCell>
                    <strong>{res.description}</strong>
                  </TableCell>
                  <TableCell>
                    {/* action buttons*/}
                    <Button 
                      variant="contained" 
                      color="secondary"
                      onClick={(event)=>this.onClickDeleteRestaurant(event,res.id, res.menuId)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Restaurants;
