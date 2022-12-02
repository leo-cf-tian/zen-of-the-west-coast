import React from 'react';

import classes from './Member.module.css';

const Member = (props) => (
    <div className={classes.Container}>
        <img className={classes.Image} src={props.image} alt={props.name} draggable={false}/>
        <p className={classes.Name}>{props.name}</p>
        <p className={classes.Role}>{props.role}</p>
    </div>
)

export default Member; 
