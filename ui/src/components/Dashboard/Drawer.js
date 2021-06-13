import React, { Component } from 'react'
import {
    Drawer as MUIDrawer, 
    ListItem,
    List, 
    ListItemIcon,
    ListItemText
    } from '@material-ui/core';
import MenuItems from './MenuItems'
import {Link} from 'react-router-dom';

export class Drawer extends Component {
    render() {
        return (
            <MUIDrawer variant="permanent" className="sidebar-drawer">
                <h2 style={{color:'#8c000a', marginLeft:'20px', fontWeight:900}}>Uberfoods</h2>
                <List>
                    {MenuItems[0].map((menu,index)=>(
                        <Link to={menu.url} style={{textDecoration:'none'}}>
                            <ListItem button key={menu}>
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                <ListItemText primary={menu.title} style={{color:'#211829'}}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </MUIDrawer>
        )
    }
}

export default Drawer