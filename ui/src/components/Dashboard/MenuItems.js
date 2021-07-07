import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Badge from '@material-ui/core/Badge';
import FastfoodIcon from '@material-ui/icons/Fastfood';


const MenuItems=[
    [
        /*Restaurant Manager*/
        {
            title: 'Restaurants',
            url:'resRestaurants',
            icon:<RestaurantIcon/>
        },
        {
            title: 'Articles',
            url:'articles',
            icon:<FastfoodIcon/>
        },
        {
            title: 'Profile',
            url:'profile',
            icon:<AccountBoxIcon/>
        }
    ]
]

export default MenuItems