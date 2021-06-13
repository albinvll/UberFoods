import React, { Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import ResIMG from '../../../assets/restaurant.jpg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './Restaurants.css';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {Link} from '@material-ui/core';





export class Restaurants extends Component {

    state = {
        restaurants: [
            {
                restaurantID: 1,
                restaurantName: 'Restaurant Test1',
                dateCreated: '10/10/2011',
                location: 'Ulpjane',
            },
            {
                restaurantID: 2,
                restaurantName: 'Restaurant Test2',
                dateCreated: '10/10/2012',
                location: 'Dardani'
            },
            {
                restaurantID: 3,
                restaurantName: 'Restaurant Test3',
                dateCreated: '10/10/2013',
                location: 'Bregu Diellit'
            }
        ],
        
        setOpen: false
    }

    handleOpen = () => {
        this.setState({setOpen: true});
    };
    
    handleClose = () => {
        this.setState({setOpen: false});
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
                    <TableCell>#</TableCell>
                    <TableCell>Restaurant Name</TableCell>
                    <TableCell>Added Date</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.restaurants.map((res) => (
                    <TableRow>
                      <TableCell>
                        <Avatar alt="Restaurant" src={ResIMG} />
                      </TableCell>
                      <TableCell>
                        <strong>{res.restaurantName}</strong>
                      </TableCell>
                      <TableCell>
                        <strong>{res.dateCreated}</strong>
                      </TableCell>
                      <TableCell>
                        <strong>{res.location}</strong>
                      </TableCell>
                      <TableCell>
                        {/* action buttons*/}
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ marginRight: "10px" }}
                          onClick={this.handleOpen}
                        >
                          Edit
                        </Button>
                        <Button variant="contained" color="secondary">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className="modal"
              open={this.state.setOpen}
              onClose={this.handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={this.state.setOpen}>
                <div className="open">
                  <h2 id="transition-modal-title">Edit Restaurant</h2>
                  <p id="transition-modal-description">Form coming soon</p>
                </div>
              </Fade>
            </Modal>
          </div>
        );
    }
}

export default Restaurants