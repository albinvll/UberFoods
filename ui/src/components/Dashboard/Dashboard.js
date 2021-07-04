import React, { Component } from 'react';
import Drawer from './Drawer';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import './Dashboard.css'
import Restaurants from './Pages/Restaurants';
import Articles from './Pages/Articles';

export class RestaurantDashboard extends Component {

    

    componentDidMount=()=>{
        const accountTypeId = localStorage.getItem('accountTypeId');

        if(accountTypeId != 3){
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <Router>
                <div className="dashboard-mainSection">
                    <div className="drawer-container">
                        <Drawer/>
                    </div>
                    <div className="dashboard-left-content-container">
                        <Switch>
                            <Route path="/resDashboard" component={DashboardPage}/>
                            <Route path="/resRestaurants" component={Restaurants}/>
                            <Route path="/articles" component={Articles}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )   
    }
}

export default withRouter(RestaurantDashboard);