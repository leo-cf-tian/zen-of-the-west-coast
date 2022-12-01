import React from 'react';

import classes from './OverviewPart.module.css'; 

const OverviewPart = (props) => {
    return (
        <div className={classes.Container}>
            <h2 className={classes.Title}>{props.title}</h2>
            <hr className={classes.Divider}/>
            <p className={classes.Body}>{props.body}</p> 
        </div>
    )
}

export default OverviewPart;
