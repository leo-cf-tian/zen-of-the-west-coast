import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem.js'; 

const NavigationItems = (props) => {
    return (
        <ul className={props.toolbar ? classes.ContainerToolbar : classes.Container}>
            <NavigationItem link="/" end toolbar={props.toolbar}>Home</NavigationItem>
            <NavigationItem link="/team" end toolbar={props.toolbar}>Team</NavigationItem>
        </ul>
    );
};

export default NavigationItems; 
